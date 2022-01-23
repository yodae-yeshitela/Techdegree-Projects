//create an object to hold most of inputs that need validation
//with their own respective properties and methods to validate and handle
//invalid inputs.

const formInputs = {
    'user-name':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "Name is required",
        updateError: function(){
            if(this.isValid){
                this.$element.toggleClass('isValid');
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();

            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            this.isValid = /^\s*\w+[\w\s',-\\]*$/i.test(this.value);
            this.updateError();
        }
    },
    'user-email':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "Email is required",
        updateError: function(){
            if(this.isValid){
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();
            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            if(this.value.length != 0){
                if(!(/[^@]+@[^\.]+\..+/.test(this.value))){
                    this.isValid = false;
                    this.errorMessage = "Email is not valid";
                }else{
                this.isValid = true;
                }
            } else{
                this.isValid = false;
                this.errorMessage = "Email is required";
            }
            this.updateError();
        }
    },
    'user-cc-num':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "Name is required",
        updateError: function(){
            if(this.isValid){
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();
            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            if($userPayment.val() != 'credit-card')
            {
                this.isValid = true;
                return;
            }
            if(this.value.length != 0){
                if(!(/^\d{13,16}$/i.test(this.value))){
                    this.isValid = false;
                    this.errorMessage = "Credit card number is not valid";
                }else{
                this.isValid = true;
                }
            } else{
                this.isValid = false;
                this.errorMessage = "Credit card number is required";
            }
            this.updateError();
        }
    },
    'user-zip':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "Name is required",
        updateError: function(){
            if(this.isValid){
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();
            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            if($userPayment.val() != 'credit-card')
            {
                this.isValid = true;
                return;
            }
            if(this.value.length != 0){
                if(!(/^\d{5}$/i.test(this.value))){
                    this.isValid = false;
                    this.errorMessage = "Zip code is not valid";
                }else{
                this.isValid = true;
                }
            } else{
                this.isValid = false;
                this.errorMessage = "Zip code is required";
            }
            this.updateError();
        }
    },
    'user-cvv':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "Name is required",
        updateError: function(){
            if(this.isValid){
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();
            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            if($userPayment.val() != 'credit-card')
            {
                this.isValid = true;
                return;
            }
            if(this.value.length != 0){
                if(!(/^\d{3}$/i.test(this.value))){
                    this.isValid = false;
                    this.errorMessage = "CVV is not valid";
                }else{
                this.isValid = true;
                }
            } else{
                this.isValid = false;
                this.errorMessage = "CVV is required";
            }
            this.updateError();
        }
    },
    'other-title':{
        $element: {},
        $errorContainer: {},
        get value(){
            return this.$element.val();
        },
        isValid: false,
        errorMessage: "You must specify your job role",
        updateError: function(){
            if(this.isValid){
                this.errorDisplay.hide();
            }
            else{
                this.errorDisplay.text(this.errorMessage).show();
            }
            this.$element.toggleClass('isValid', this.isValid);
            this.$element.toggleClass('hasError', !this.isValid);
        },
        validate: function(){
            if($userTitle.val() != 'other')
            {
                this.isValid = true;
                this.updateError();
                return;
            }
            if(this.value.length != 0){
                if(!(/^[\w ]+$/i.test(this.value))){
                    this.isValid = false;
                }else{
                this.isValid = true;
                }
            } else{
                this.isValid = false;
            }
            this.updateError();
        }
    }
}

//function to create a placeholder for an input element
const createErrorContainer = function(element){
    
    //create a div with a class error-message, and insert it after the input element
    const div = document.createElement('div');
    div.className = 'error-message';
    $(div).insertAfter(element)

    //assign the created element to each input item
    formInputs[element.attr('name')].errorDisplay = $(div);
}

//loop through all objects inside the form input object to get the html element
//and assign different properties to it
for(let input in formInputs){
    formInputs[input].$element = $(`[name=${input}]`).first();
    createErrorContainer(formInputs[input].$element);
    formInputs[input].$element.on('keyup change blur', ()=>formInputs[input].validate());
    
}

//focus on the first element on the page
formInputs['user-name'].$element.focus();

//hide the other-title textarea initially
formInputs['other-title'].$element.hide();

//get the select html item and assign it to a variable
const $userTitle = $('[name=user-title]');

//add an onchange event handler to toggle the other-title text box
$userTitle.on('change', function(){
    if(this.value === "other"){
        formInputs['other-title'].$element.show();
    } else{
        formInputs["other-title"].validate();
        formInputs["other-title"].$element.val('').hide();
    }
});

//get and assign different html elements using jquery
const $userDesign = $('[name=user-design]');
const $color = $('[name=color]');
const $colorContainer = $("#colors-js-puns").hide();

//empty color options object to hold the available color options
const colorOptions = {};

//get all color options and assign to colorOptions
$('[name=color]').children().each( function(){
    colorOptions[this.value] = $(this).hide();
});

//name of properties that defines which options
// are available based on the theme selected
const colorProperties = {
    "js puns": [
        'cornflowerblue',
        'darkslategrey',
        'gold'
      ],
    "heart js":[
      'tomato',
      'steelblue',
      'dimgrey'
    ]
}
//add a "choose a color" option that is not selectable just 
//to change the value of the select element
$color.prepend(
    $(document.createElement('option'))
    .val('none')
    .text('Choose a color')
    .hide()
)
.val('none');

//reset the color options when the user changes theme
const colorReset = () => $color.val('none').children().hide();

//event listener to change color based on user choice
$userDesign.change( (e) => updateColor(e.target.value));

//function to display which color options are available based
//on the user choice of theme
const updateColor = option =>{
    colorReset();
    if(option != 'Select Theme'){
        for( let opt of colorProperties[option]){
            colorOptions[opt].show();
        }
        $colorContainer.show();
    }
    else $colorContainer.hide();
}

//get some html elements for the activities section
const $activities = $('#activities');

//create and assign
const $totalContainer = $(document.createElement('div')).text('Total is : ').hide();

//initialize a varaible to contain the total cost
var total = 0;

//add the total cost section to the activities section
$activities.append($totalContainer);

//array of activities available and populate it with the options
const activities = [];
$('#activities input').each( function(){
    activities.push($(this));
});


//whenever a change occurs inside the activities section change display
//to reflect price and disable conflicting events
$('#activities').change( function(event){
    const activity = $(event.target);
    const time = event.target.getAttribute('data-day-and-time');
    const cost = parseInt($(activity).attr('data-cost'));
    if(time != null){
        for( let i of activities){
            if(i.attr('name') != activity.attr('name') && i.attr('data-day-and-time') === time){
                if(activity.is(':checked')){
                    i.attr('disabled', true);
                }
                else i.attr('disabled', false);
            }
        }
    }
    activity.is(':checked')?total += cost:total -= cost;
    $totalContainer.text("Total is: $" + total);
    total > 0?$totalContainer.show():$totalContainer.hide();
    validateActivities();
});

//get html input elements for the payments section
const $userPayment = $('[name=user-payment]').val('credit-card');
$('[value="select method"]').attr('disabled', true);
const paymentOptions = {};
$('#paypal, #bitcoin, #credit-card').map( function(){
    paymentOptions[this.id] = $(this).hide();
});


//show the credit card section initially
paymentOptions['credit-card'].show();

//helper function to hide all options
const resetPaymentOptions = () =>{
    for( let i in paymentOptions){
        paymentOptions[i].hide();
    }
}

//add change handler to toggle payment option display
$($userPayment).change( function() {
    resetPaymentOptions();
    if(this.value == "select method"){
        paymentOptions['credit-card'].show();
    }
    else paymentOptions[this.value].show();
})

//create an error for the activities section and add it
//to the activities section.
const error = $(document.createElement('div'));
error.text('Choose at least one activity').addClass('error-message').hide();
$('#activities').append(error);


//function to validate that at least on activity is selected
const validateActivities = function(){
    if(total == 0){
        error.show();
        return false;
    }
   
    error.hide();
    return true;
}


//create a success message to display once the user submits
//a valid form
const successMessage = $(document.createElement('h1'));
successMessage.text('Thank you for registering! You will receive an email confirmation soon!?!?')


//validate the form when the user submits it and handle
//an invalid form otherwise show success message
$('form').on('submit', (e) => {
    let isFormValid = true;
    for(const i in formInputs){
        formInputs[i].validate();
        isFormValid &= formInputs[i].isValid;
    }
    isFormValid &= validateActivities();
    if (isFormValid){
        e.preventDefault();
        $('.container').html(successMessage);
        console.log('success');
    }
    else{
        e.preventDefault();
        console.log('fail');
    }
});



