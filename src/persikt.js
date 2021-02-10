import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

<div class="gs4u-server loading" id="gs4u_">
	<div class="name"><span class="title">Название: </span><span class="value">#name#</span></div>
	<div class="address"><span class="title">IP: </span><span class="value">#ip#:#port#</span></div>
	<div class="game"><span class="title">Игра: </span><span class="value">#game#</span></div>
	<div class="players"><span class="title">Игроки: </span><span class="value">#players# / #players_max# (Пик: #max_online_players#)</span></div>
	<div class="players_list"><span class="title">Сейчас играют: </span><span class="value">#players_list#</span></div>
	<div class="extras"><span class="title">Настройки: </span><span class="value">#extras#</span></div>
</div>
<script src="https://www.gs4u.net/media/gs4u/js/server_banner_jsonp.js"></script>
<script async src="?callback=GS4u.parseServerResponse"></script>