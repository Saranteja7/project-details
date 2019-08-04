import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';
import { View } from 'react-native';

import DemoMenu from './DemoMenu';
import Counter from './01-Counter';
import FlexBoxes from './02-FlexBoxes';
import ShoppingList from './03-ShoppingList';
import Inputs from './04-Inputs';
import MyScrollView from './05-MyScrollView';
import MyImage from './06-MyImage';
import Http from './07-Http';
import MyButton from './08-MyButton';
import MyTouchableOpacity from './09-MyTouchableOpacity';
import Animations from './10-Animations';
import Routing from './11-Routing';
import WebView from './12-WebView';
import MyModal from './13-MyModal';
import MyAlert from './14-MyAlert';
import MyActivityIndicator from './15-MyActivityIndicator';
import MyPicker from './16-MyPicker';
import MyStatusBar from './17-MyStatusBar';
import MyGeolocation from './18-MyGeolocation';
// import MyAsyncStorage from './19-MyAsyncStorage';

const App = () => (
    <NativeRouter>
        <BackButton>
            <View>
                <Route path="/" component={DemoMenu} exact />
                <Route path="/counter" component={Counter} />
                <Route path="/flexbox" component={FlexBoxes} />
                <Route path="/list" component={ShoppingList} />
                <Route path="/inputs" component={Inputs} />
                <Route path="/scrollview" component={MyScrollView} />
                <Route path="/image" component={MyImage} />
                <Route path="/http" component={Http} />
                <Route path="/button" component={MyButton} />
                <Route path="/touchableopacity" component={MyTouchableOpacity} />
                <Route path="/animations" component={Animations} />
                <Route path="/routing" component={Routing} />
                <Route path="/webview" component={WebView} />
                <Route path="/modal" component={MyModal} />
                <Route path="/alert" component={MyAlert} />
                <Route path="/activityindicator" component={MyActivityIndicator} />
                <Route path="/picker" component={MyPicker} />
                <Route path="/statusbar" component={MyStatusBar} />
                <Route path="/geolocation" component={MyGeolocation} />
            </View>
        </BackButton>
    </NativeRouter>
);

export default App;