import React from 'react';
import Dashboard from './dashboard';
import { Router } from "@reach/router"

const App= () => 
{
	
return (<>
 <Router>
	<Dashboard path="/" />
 </Router>
</>);
}


export default App;
