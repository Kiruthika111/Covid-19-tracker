// import React, { Component } from 'react';
 import React, { useEffect } from 'react';

import './App.css';
import tawkTo from "tawkto-react";
import Global from './containers/Global/Global'
import Countries from './containers/countries/countries'
const tawkToPropertyId = '607eef785eb20e09cf34dbce'

const tawkToKey = 'get_key_from_tawkto_dashboard'

function App() {
  useEffect(() => {
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/607eef785eb20e09cf34dbce/1f3ntesm0';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
    Tawk_API.onLoad = function () {
      console.log("chat loaded");
      Tawk_API.setAttributes(
        {
          name: "Test Name",
          email: "email@email.com",
          hash: "hash value",
        },
        function (error) {}
      );
    };
  }, []);

  return (
    <div>
      <div>
      <Global/>
      <Countries/>
      </div>
    </div>
  );
}

export default App;
