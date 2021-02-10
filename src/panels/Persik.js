import React from 'react';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';



const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Persik
		</PanelHeader>
		<iframe src="https://www.gs4u.net/ru/webmod/frame-map:120;splr:1;players:200;mfs:112;mac:6d6d6d;mahc:8f8f8f;sna:d59120;mbg:1d1d1d;bg:4d4d4d;fg:ffffff;snb:666666;itc:aaaaaa;shs:1;/s/164581.html" frameborder="0" scrolling="no" width="360" height="812" marginwidth="0" marginheight="0">
		</iframe>
	</Panel>


);

export default Persik;
