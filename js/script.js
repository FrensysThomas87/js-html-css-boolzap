
new Vue({
el: '#app',
data:{
  inputMessage:'',
  activeIndex: 0,
  messageSended:{},
  answerMessage:{},
  defaultAnswer:'ok',
  inputSearch:'',
  dropMenuClass: 'disp-none',
  activeMsg: {
      index: false,
      show: false,
  },
  msgVisible:{
    show:true,
    index:false
  },



// Oggetto contacts
  contacts: [
	{
		name: 'Michele',
		avatar: './img/avatar_1.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: './img/avatar_2.jpg',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: './img/avatar_3.jpg',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: './img/avatar_4.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			   }
		  ],
	   },
    ]
  },
  methods:{
    // funzione che permette di switchare da una chat all'altra
    activeChat:function(index){
      this.activeIndex = index;
    },

    // funzione per l'autorisposta
    autoAnswer:function(){
      risposta = this.defaultAnswer;
      this.answerMessage = {
        date: this.dateGenerator(),
        text: risposta,
        status: 'received',
      }

    let that = this;
    setTimeout(function(){
      that.contacts[that.activeIndex].messages.push(that.answerMessage);
      },1000)
    },

    // funzione per mandare i messaggi
    sendMessage:function(message, risposta){

      message = this.inputMessage;

      this.messageSended = {
        date: '',
				text: message,
				status: 'sent',
      }

      this.contacts[this.activeIndex].messages.push(this.messageSended);
      this.inputMessage = '';

      this.autoAnswer();

    },

    // Prende l'indice dell'ora dell'ultimo messagio
    getLastTime:function(index){
      const allMessages = this.contacts[index].messages;
      const lastIndex = allMessages.length - 1;
      const lastDate = allMessages[lastIndex].date;
      return lastDate;

    },

    // funzione che serve per filtrare i contatti cecati
    getSearchedContact:function(){
      this.contacts.forEach((element) => {
        if(element.name.toLowerCase().includes(this.inputSearch.toLowerCase())){
          element.visible = true;
        }else{
          element.visible = false;
        }
      });
    },


    // Mostra e nasconde il dropdown menu del singolo messaggio
    showDropDownMenu:function(index){
      this.activeMsg.index = index;
      this.activeMsg.show = !this.activeMsg.show;
      // console.log(this.activeMsg.index);
      // console.log(this.activeMsg.show);

    },

    // Genera la data corrente
    dateGenerator: function(){
      const actualDate = dayjs().format('DD-MM-YYYY HH:mm:ss');
      return actualDate;
    },

    // Elimina i singoli messaggi
    deleteMessage:function(index){
      this.contacts[this.activeIndex].messages.splice(index,1);
    }
  }

});
Vue.config.devtools = true;
