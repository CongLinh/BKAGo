import { connect } from 'react-redux';
import Home from '../components/Home';
import {
    setName,
    getCurrentLocation
} from '../modules/home';

const mapStateToProps = (state) => ({
    myName: state.home.name,
    myRegion: state.home.region
});

const mapActionCreators = {
    setName,
    getCurrentLocation
};

export default connect(mapStateToProps, mapActionCreators)(Home);