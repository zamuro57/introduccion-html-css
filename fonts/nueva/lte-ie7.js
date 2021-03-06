/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-pencil' : '&#x26;',
			'icon-broadcast' : '&#x32;',
			'icon-microphone' : '&#x33;',
			'icon-support' : '&#x3f;',
			'icon-mouse' : '&#x44;',
			'icon-tablet' : '&#x49;',
			'icon-database' : '&#x4c;',
			'icon-loading' : '&#x4d;',
			'icon-wrench' : '&#x51;',
			'icon-equalizer' : '&#x52;',
			'icon-cog' : '&#x53;',
			'icon-pie' : '&#x54;',
			'icon-cube' : '&#x56;',
			'icon-menu' : '&#x58;',
			'icon-cloud' : '&#x7a;',
			'icon-briefcase' : '&#x73;',
			'icon-compass' : '&#x23;',
			'icon-stats-up' : '&#x24;',
			'icon-tree' : '&#x2e;',
			'icon-book' : '&#x30;',
			'icon-stats' : '&#x31;',
			'icon-painting' : '&#x34;',
			'icon-stats-2' : '&#x36;',
			'icon-list' : '&#x37;',
			'icon-database-2' : '&#x38;',
			'icon-cube-2' : '&#x2d;',
			'icon-trophy' : '&#x3c;',
			'icon-location' : '&#x3d;',
			'icon-help' : '&#x3e;',
			'icon-warning' : '&#x42;',
			'icon-minus' : '&#x45;',
			'icon-plus' : '&#x4f;',
			'icon-close' : '&#x50;',
			'icon-upload' : '&#x71;',
			'icon-cloud-2' : '&#x7b;',
			'icon-remove' : '&#x55;',
			'icon-mobile' : '&#x48;',
			'icon-phone' : '&#x40;',
			'icon-paper' : '&#x35;',
			'icon-menu-2' : '&#x5a;',
			'icon-email' : '&#x21;',
			'icon-attachment' : '&#x27;',
			'icon-price' : '&#x28;',
			'icon-mouse-2' : '&#x29;',
			'icon-clock' : '&#x2a;',
			'icon-play' : '&#x2c;',
			'icon-light-bulb' : '&#x22;',
			'icon-creative-commons' : '&#x2b;',
			'icon-network' : '&#x2f;',
			'icon-suitcase' : '&#x39;',
			'icon-user' : '&#x3a;',
			'icon-code' : '&#x3b;',
			'icon-keyboard' : '&#x41;',
			'icon-calendar-alt-fill' : '&#x43;',
			'icon-magnifying-glass' : '&#x46;',
			'icon-home' : '&#x47;',
			'icon-pencil-2' : '&#x25;',
			'icon-wrench-2' : '&#x4a;',
			'icon-console' : '&#x4b;',
			'icon-code-2' : '&#x4e;',
			'icon-puzzle' : '&#x57;',
			'icon-arrow' : '&#x59;',
			'icon-arrow-2' : '&#x5b;',
			'icon-arrow-3' : '&#x5c;',
			'icon-arrow-4' : '&#x5d;',
			'icon-clock-2' : '&#x5e;',
			'icon-pencil-3' : '&#x61;',
			'icon-users' : '&#x62;',
			'icon-calendar-alt-stroke' : '&#x63;',
			'icon-play-2' : '&#x66;',
			'icon-record' : '&#x67;',
			'icon-book-2' : '&#x68;',
			'icon-history' : '&#x69;',
			'icon-history-2' : '&#x6b;',
			'icon-layout' : '&#x6c;',
			'icon-exit' : '&#x6d;',
			'icon-contract' : '&#x6f;',
			'icon-bookmark' : '&#x60;',
			'icon-atom' : '&#x64;',
			'icon-coffee' : '&#x65;',
			'icon-rocket' : '&#x6a;',
			'icon-github' : '&#x70;',
			'icon-refresh' : '&#x72;',
			'icon-eject' : '&#xe03a;',
			'icon-mobile-2' : '&#xe052;',
			'icon-download' : '&#xe053;',
			'icon-thumbs-up' : '&#xe000;',
			'icon-pacman' : '&#xe001;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};