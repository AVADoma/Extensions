let GLOBAL_LIST_DOMAINS = {}

// https://bugs.chromium.org/p/chromium/issues/detail?id=1271154

let lifeline

keepAlive()

chrome.runtime.onConnect.addListener(port => {
	if (port.name === 'keepAlive') {
		lifeline = port
		setTimeout(keepAliveForced, 295e3) // 5 minutes minus 5 seconds
		port.onDisconnect.addListener(keepAliveForced)
	}
})

function keepAliveForced() {
	lifeline?.disconnect()
	lifeline = null
	keepAlive()
}

async function keepAlive() {
	if (lifeline) return
	for (const tab of await chrome.tabs.query({ url: '*://*/*' })) {
		try {
			await chrome.scripting.executeScript({
				target: { tabId: tab.id },
				function: () => chrome.runtime.connect({ name: 'keepAlive' }),
				// `function` will become `func` in Chrome 93+
			})
			chrome.tabs.onUpdated.removeListener(retryOnTabUpdate)
			return
		} catch (e) {}
	}
	chrome.tabs.onUpdated.addListener(retryOnTabUpdate)
}

async function retryOnTabUpdate(tabId, info, tab) {
	if (info.url && /^(file|https?):/.test(info.url)) {
		keepAlive()
	}
}

chrome.webRequest.onBeforeRequest.addListener(
	function (info) {
		const domain = info.url.match(
			/[=\/]([a-z0-9-]{1,63}\.(ava|web3|dapp|ipfs|defi|gamefi))[\/&$]/i
		)
		if (domain) {
			if (typeof GLOBAL_LIST_DOMAINS[domain[1]] !== 'undefined') {
				if (!GLOBAL_LIST_DOMAINS[domain[1]]) return
				chrome.storage.sync.get('ipfsGatawey', data => {
					chrome.tabs.update(undefined, {
						url: `https://${data.ipfsGatawey}/ipfs/${GLOBAL_LIST_DOMAINS[domain[1]]}`,
					})
				})
			} else {
				chrome.tabs.update(undefined, {
					url: 'blank.html',
				})

				const loading = setTimeout(() => {
					chrome.tabs.update(undefined, {
						url: 'loading.html',
					})
				}, 2000)

				const url =
					'https://deep-index.moralis.io/api/v2/0x8B860047795E9A42c2E9D568867c03a22132CB4E/function?chain=avalanche%20testnet&function_name=getIPFS'

				const myHeaders = new Headers()
				myHeaders.append('accept', 'application/json')
				myHeaders.append(
					'X-API-Key',
					'FXurtm7Fhf6M0YmkGlwakLNDZ8tpaFaajhR5nz2KcaZoj3Rz1dRgocNxBU3I33oK'
				)
				myHeaders.append('Content-Type', 'application/json')

				const raw = JSON.stringify({
					abi: [
						{
							inputs: [
								{
									internalType: 'string',
									name: '_domain',
									type: 'string',
								},
							],
							name: 'getIPFS',
							outputs: [
								{
									internalType: 'string',
									name: '',
									type: 'string',
								},
							],
							stateMutability: 'view',
							type: 'function',
						},
					],
					params: {
						_domain: domain[1],
					},
				})

				const requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow',
				}

				fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => {
						clearTimeout(loading)
						if (!result) {
							chrome.tabs.update(undefined, {
								url: 'not.html',
							})
						} else {
							result = result.toString().replace(/[^a-z0-9]/gi, '')
							if (!result) {
								chrome.tabs.update(undefined, {
									url: 'not.html',
								})
							} else {
								GLOBAL_LIST_DOMAINS[domain[1]] = result
								chrome.storage.sync.get('ipfsGatawey', data => {
									chrome.tabs.update(undefined, {
										url: `https://${data.ipfsGatawey}/ipfs/${result}`,
									})
								})
							}
						}
					})
					.catch(error => console.log('error', error))
			}
		}
	},
	{
		urls: ['<all_urls>'],
	},
	[]
)
