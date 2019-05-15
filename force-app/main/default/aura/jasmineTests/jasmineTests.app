<aura:application >

    <c:lts_jasmineRunner testFiles="{!join(',', 
      $Resource.jasmineHelloWorldTests,
      $Resource.JasmineTestSaturday
    )}" />

</aura:application>