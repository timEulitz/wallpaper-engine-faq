const en = require('../../app_strings/en.json');
const zh = require('../../app_strings/zh.json');

module.exports = {
	title: 'Wallpaper Engine - Troubleshooting & FAQ',
	locales: {
		'/en/': {
			lang: 'en-US',
			title: en.title,
			description: en.description,
		}
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		nextLinks: false,
		prevLinks: false,
		locales: {
			'/en/': {
				contactUs: en.contactUs,
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.selectText,
				label: en.language_name,
				ariaLabel: en.selectText,
				sidebar: {
					'/': getTopLevelSidebar('/en/', en.sidebar_windows, en.sidebar_crashes, en.sidebar_videos, en.sidebar_analysis, en.sidebar_audio, en.sidebar_performance, en.sidebar_nowshow, en.sidebar_browser, en.sidebar_downloads, en.sidebar_general),
				}
			},
			'/zh/': {
				contactUs: zh.contactUs,
				searchPlaceholder: zh.searchPlaceholder,
				selectText: zh.selectText,
				label: zh.language_name,
				ariaLabel: zh.selectText,
				sidebar: {
					'/': getTopLevelSidebar('/zh/', zh.sidebar_windows, zh.sidebar_crashes, zh.sidebar_videos, zh.sidebar_analysis, zh.sidebar_audio, zh.sidebar_performance, zh.sidebar_nowshow, zh.sidebar_browser, zh.sidebar_downloads, zh.sidebar_general),
				}
			}
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: 'UA-145121163-3' }],
		['vuepress-plugin-redirect', { locales: true } ],
		['sitemap', { hostname: 'https://help.wallpaperengine.io' } ],
		['robots', {
				host: "https://help.wallpaperengine.io",
				allowAll: true,      
				sitemap: "/sitemap.xml",
				policies: [
					{
						userAgent: '*',
					}
				]
			},
		],
	]
};

function getTopLevelSidebar(locale, windowsGroup, crashGroup, videoGroup, debugGroup, audioGroup, performanceGroup, notShowingGroup, interfaceGroup, steamGroup, functionalityGroup) {
	return [
		{
			title: functionalityGroup,
			collapsable: false,
			children: [
				locale + 'functionality/automaticstartup',
				locale + 'functionality/rgb',
				locale + 'functionality/restoredefaults',
				locale + 'functionality/export',
				locale + 'functionality/tray',
				locale + 'functionality/editingwallpapers',
				locale + 'functionality/linuxmacos',
				locale + 'functionality/applicationrules'
			]
		},
		{
			title: windowsGroup,
			collapsable: false,
			children: [
				locale + 'general/bits',
				locale + 'general/brokensleep',
				locale + 'general/focusloss',
				locale + 'general/multiscreencenter',
				locale + 'general/aero',
				locale + 'videos/windows-n',
			]
		},
		{
			title: steamGroup,
			collapsable: false,
			children: [
				locale + 'steam/download',
				locale + 'steam/steamworks',
				locale + 'steam/redownload',
				locale + 'steam/contentfile',
				locale + 'steam/backup',
				locale + 'steam/uploads',
				locale + 'steam/ingame'
			]
		},
		{
			title: notShowingGroup,
			collapsable: false,
			children: [
				locale + 'noshow/nowallpaper',
				locale + 'noshow/notplaying',

			]
		},
		{
			title: crashGroup,
			collapsable: false,
			children: [
				locale + 'crash/application',
				locale + 'crash/system',
				locale + 'crash/dxsupport',
				locale + 'crash/battleye',
			]
		},
		{
			title: interfaceGroup,
			collapsable: false,
			children: [
				locale + 'interface/broken',
				locale + 'interface/transparent',
				locale + 'interface/emptyresults',
				locale + 'interface/exclude',
			]
		},
		{
			title: videoGroup,
			collapsable: false,
			children: [
				locale + 'videos/lav',
				locale + 'noshow/notplaying',
				locale + 'videos/performance',
				locale + 'videos/artifacts',
				locale + 'videos/redline',
				locale + 'videos/windows-n',
			]
		},
		{
			title: audioGroup,
			collapsable: false,
			children: [
				locale + 'audio/audiodetection',
				locale + 'audio/intermittent',
			]
		},
		{
			title: performanceGroup,
			collapsable: false,
			children: [
				locale + 'performance/gpu',
				locale + 'performance/game',
				locale + 'performance/refresh',
				locale + 'performance/dwm',
			]
		},
		{
			title: debugGroup,
			collapsable: false,
			children: [
				locale + 'debug/scantool',
				locale + 'debug/contact'
			]
		}
	]
}