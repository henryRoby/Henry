import React from 'react';

import SwiftSlider from 'react-swift-slider'
export default class Slide extends React.Component {

    
  render() {
    const data =  [
        {'id':'1','src':'https://p1.storage.canalblog.com/17/01/421949/106978478_o.jpg'},
        {'id':'2','src':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIXdicF2JyG_FxSW78PC8yjFvfmGEtvEwrP9cY3hXHi0UiFb5'},
        {'id':'3','src':'https://p0.storage.canalblog.com/02/68/421949/115806549_o.jpeg'},
        {'id':'4','src':'https://i.ytimg.com/vi/DxUi8I5aSgc/maxresdefault.jpg'},
        {'id':'5','src':'https://s3-eu-west-1.amazonaws.com/com.okpal.media/o/7/qpm6G-89739663-o.jpg'}
      ];
      
    return (
 
      <div className="slide">
          <SwiftSlider data={data}/>
      </div>
    );
  }
}