// import helloWorld from './hello-world';
// import addImage from './add-image';

// helloWorld();
// addImage();

import helloWorldButton from './components/hello-world-button/hello-world-button';
import heading from './components/heading/heading';

const headingObj = new heading();
headingObj.render();

const helloWorldButtonObj = new helloWorldButton();
helloWorldButtonObj.render();