({
    addPerson : function(component, event, helper) {
        var personData = component.get("v.personObj");
        var personList = component.get("v.personList");

        var person = {
            firstName : personData.firstName,
            lastName : personData.lastName,
            age : personData.age,
            eyeColor : personData.eyeColor
        };

        personList.push(person) ;
        component.set("v.personList",personList);
        component.set("v.personObj",{});

    },
    init : function(component, event, helper) {
        component.set("v.personObj",{});

        component.set("v.columns",[
            {label : 'First Name',fieldName : 'firstName', type : "text",sortable:"false"},
            {label : 'Last Name',fieldName : 'lastName', type : "text",sortable:"false"},
            {label : 'Age',fieldName : 'age', type : "text",sortable:"false"},
            {label : 'Eye Color',fieldName : 'eyeColor', type : "text",sortable:"false"}
        ]);

    }
})
