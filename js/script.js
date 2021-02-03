
new Vue({
el: '#app',
data:{
  inputMessage:'',
  activeIndex: 0,
  messageSended:{},
  answerMessage:{},
  defaultAnswer:'ok',
  currentDate: new Date().toLocaleString(),
  inputSearch:'',



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
    activeChat:function(index){
      this.activeIndex = index;
    },

    autoAnswer:function(){
      risposta = this.defaultAnswer;
      this.answerMessage = {
        date: this.currentDate,
        text: risposta,
        status: 'received',
      }

    let that = this;
    setTimeout(function(){
      that.contacts[that.activeIndex].messages.push(that.answerMessage);
      },1000)
    },

    sendMessage:function(message, risposta){

      message = this.inputMessage;

      this.messageSended = {
        date: this.currentDate,
				text: message,
				status: 'sent',
      }



      this.contacts[this.activeIndex].messages.push(this.messageSended);
      this.inputMessage = '';

      this.autoAnswer();

    },

    getLastTime:function(index){
      const allMessages = this.contacts[index].messages;
      const lastIndex = allMessages.length - 1;
      const lastDate = allMessages[lastIndex].date;
      return lastDate;

    },

    getSearchedContact:function(){
      return this.contacts.filter((element)=>{
        return element.name.match(this.inputSearch);
      })
    }


  },

});
Vue.config.devtools = true;
