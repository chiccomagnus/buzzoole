function aspetta(){
    if($("#formEmail").find(".msg").first().children(".alert").length!=0){
        $("#formEmail").find(".msg").first().empty();
        c++;
        if(c < user.length) {
            send();
        }else{
            alert("finish");
            return;
        }
    }else{
        setTimeout("aspetta()",500);
    }
}
function send(){
    $("#name").val(user[c][1]);
    $("#email").val(user[c][0]);
    $("#subject").val(subject);
    $("#text").text(text).trigger("keyup");
    $("#b_invite").trigger("click");
    aspetta();
}
var c=0;
var subject="mails subject - oggetto della mail";
var text="your message: remember to insert your invite link - messaggio : ricordati di inserire il tuo link di invito";
var user=new Array();

/*
here you can insert your contact list with mail in the first param and name in the second like this:
user.push(new Array("yourfriendemail@mail.dom","yourfrindesname"));
qui puoi inserire tutti i tuoi contatti avendo cura di mettere prima la mail e poi il cognome così:
user.push(new Array("lamaildeltuoamico@mail.dom","ilnomedeltuoamico"));
*/

user.push(new Array("try@try.com","trythis"));
user.push(new Array("buzzoole@buzzoole.com","buzzoole"));
send();

/*
to excute this script go to http://buzzoole.com/ambassador click on "invite by email" and then in the adress bar type "javascript: herethecodeabove"
per eseguire lo script vai alla pagina http://buzzoole.com/ambassador clicca su "invite by email" poi nella barra degli indirizzi scrivi "javascript: quiilcodicechecèsopra"
*/ 
