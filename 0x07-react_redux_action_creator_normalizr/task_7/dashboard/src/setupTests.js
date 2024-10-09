import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Set up Enzyme adapter for React 17
configure({ adapter: new Adapter() });
