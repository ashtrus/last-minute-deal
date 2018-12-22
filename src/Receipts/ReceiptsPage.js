import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import {
	Tile,
	ImageBackground,
	Overlay,
	Icon,
	Title,
	Caption,
	Image,
	Subtitle,
	Heading,
	Row,
	Button,
	View
} from '@shoutem/ui';
import commonStyles from 'src/common/styles';
import { Divider } from 'src/common/components';

class ReceiptsPage extends Component {
	render() {
		return (
			<ScrollView style={commonStyles.container}>
				<Divider text="Available" />

				<Row>
					<Image
						styleName="small rounded-corners"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>Family Safari Vacation To The Home Of The Gods</Subtitle>
						<View styleName="horizontal">
							<Subtitle styleName="md-gutter-right">$120.00</Subtitle>
							<Caption styleName="line-through">$150.00</Caption>
						</View>
					</View>
					<Button styleName="right-icon">
						<Icon name="add-to-cart" />
					</Button>
				</Row>
				<Row>
					<Image
						styleName="small rounded-corners"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>Family Safari Vacation To The Home Of The Gods</Subtitle>
						<View styleName="horizontal">
							<Subtitle styleName="md-gutter-right">$120.00</Subtitle>
							<Caption styleName="line-through">$150.00</Caption>
						</View>
					</View>
					<Button styleName="right-icon">
						<Icon name="add-to-cart" />
					</Button>
				</Row>

				<Divider text="Used" />

				<Row>
					<Image
						styleName="small rounded-corners"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>Family Safari Vacation To The Home Of The Gods</Subtitle>
						<View styleName="horizontal">
							<Subtitle styleName="md-gutter-right">$120.00</Subtitle>
							<Caption styleName="line-through">$150.00</Caption>
						</View>
					</View>
					<Button styleName="right-icon">
						<Icon name="add-to-cart" />
					</Button>
				</Row>
				<Row>
					<Image
						styleName="small rounded-corners"
						source={{
							uri:
								'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png'
						}}
					/>
					<View styleName="vertical stretch space-between">
						<Subtitle>Family Safari Vacation To The Home Of The Gods</Subtitle>
						<View styleName="horizontal">
							<Subtitle styleName="md-gutter-right">$120.00</Subtitle>
							<Caption styleName="line-through">$150.00</Caption>
						</View>
					</View>
					<Button styleName="right-icon">
						<Icon name="add-to-cart" />
					</Button>
				</Row>
			</ScrollView>
		);
	}
}

export default connect(state => state)(ReceiptsPage);
