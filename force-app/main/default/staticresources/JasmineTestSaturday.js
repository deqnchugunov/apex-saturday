describe("Lightning Component Testing Examples", function(){
    afterEach(function() {
        // Each spec (test) renders its components into the same div,
        // so we need to clear that div out at the end of each spec.
        $T.clearRenderedTestComponents();
    });
 
    describe('c:PersonDemo', function(){ 
        it('Is Datatable Populated', function(done) {
 
            var personListObj = [];
            var p = {
                    firstName : "John",
                    lastName : "Doe",
                    age : "28",
                    eyeColor : "Green"} ;
                    personListObj.push(p);

            var attributes = {
                personList:personListObj  
            };

            $T.createComponent("c:PersonDemo", attributes, true) 
            .then(function(component) {
                var totalRecords = component.get("v.personList");
                expect(totalRecords.length).toEqual(1); 
                expect(totalRecords[0].firstName).toEqual("John"); 
                done();
            }).catch(function(e) {
                // end this spec as a failure
                done.fail(e);
            });
        });
    });  
});