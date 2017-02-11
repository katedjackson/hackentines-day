
import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as postActionsCreator from '../../redux/actions/post.js';

//import PostList from '../PostList/';
import Swipeable from './Swipeable';

function mapDispatchToProps(dispatch) {
  return {
    postActions: bindActionCreators(postActionsCreator, dispatch)
  }
}

let data = [
    {
        title: 'A wonderful day',
        text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: 'My amazing journey',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: 'Three recipes without cocoa',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
        image: 'portrait-3.jpg',
        id: '3'
    },
    {
        title: 'Generic clickbait title',
        text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
        image: 'portrait-4.jpg',
        id: '4'
    }
];


class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Swipeable initialCardsData={data} />
      </div>
    );
  }

  componentWillMount() {
    let { postActions } = this.props
    postActions.fetchList()
  }

}

export default connect(null, mapDispatchToProps)(HomePage);
