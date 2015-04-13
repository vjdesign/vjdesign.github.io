window.onload = function(){
    
    // initialise addons
    rightHeight.init();
    
    
// Test before using Legit    
var legitsupported = !!document.querySelectorAll && !!document.querySelector && !!window.addEventListener;
if ( !legitsupported ) return;
        
    _('.show-content').hide();
    _('.show-link').on('click', function(e){
        e.preventDefault();
        _(this).next('.show-content').toggle();
    });
    
    
    /* validate form */

    // Hide the error messages
    _('#noquery').hide();
    _('#noemail').hide();
    _('#validemail').hide();
    
    _('#comments').on('blur',function(){
        if(this.value==""){
            _('#noquery').show();
        } else {
            _('#noquery').hide();   
        }
    });
    
    function ValidateEmail(inputText)
        {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
        {
            _('#validemail').hide();
        }
        else
        {
            _('#validemail').show();
            document.contact.email.focus();
            return false;
        }
    }


    _('#email').on('blur',function(){
        

        if(this.value==""){
            _('#noemail').show();
        } else {
            _('#noemail').hide();   
            var email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
            ValidateEmail(this);
        }
        
         
 
        
    });
    
    
    
}





