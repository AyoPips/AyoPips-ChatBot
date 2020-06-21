let basicSteps = [
{
	id:'1',
	message: 'Hi! I\'m @AyoPips\'s chatbot',
	trigger: '2'
},
{
	id:'2',
	message: 'Can I get to know you?',
	trigger: '3'
},
{
	id: '3',
	user: true,
	trigger: 4
},
{
	id: '4',
	message: 'Whats your name?',
	trigger: '5'
},

{
	id: '5',
	user: true,
	trigger: 6
},
{
	id: '6',
	message: 'Okay. It\'s lovely to meet you by the way.',
	trigger: 7
},
{
	id: '7',
	message: 'What track are you on at hngi7?',
	trigger: 8
},
{	id: '8',
	user: true,
	trigger: 9
},

{	id: '9',
	message: 'Alright. Good to know',
	trigger: 10
},

{
	id: '10',
	message: 'what do you think about the chatbot task?',
	trigger: 11
},
{
	id: '11',
	user: true,
	trigger: '12'
},
{
	id:'12',
	message: '@AyoPips tells me it\'s been fun for him',
	trigger: '13'
},
{
	id: '13',
	message: 'Do you agree?',
	trigger: '14'
},
{
	id: '14',
	user: true,
	trigger: '15'
},
{
	id: '15',
	message: 'I\'m really enjoying our conversation.',
	trigger: '16'
},
{
	id: '16',
	message: 'What do you think?.',
	trigger: '17'
},
{
	id: '17',
	user: true,
	trigger: '18'
},
{
	id: '18',
	message: 'its nice talking to you Bye.',
	trigger: 19
},
{
	id: '19',
	message: 'One final thing though.',
	trigger: 20
},
{
	id: '20',
	message: 'Please implore Mark to promote @AyoPips to stage 4.',
	trigger: 21
},
{
	id: '21',
	message: '...he has been trying to get a task in team sentry but no luck. Thanks to Mark',
	trigger: 22
},
{	id: '22',
	message: 'Let\'s talk some other time.',
	trigger: 23
},
{	id: '23',
	message: 'Bye ):',
	trigger: 24
},
{	id: '24',
	user: true,
	end: true
}
]


export default basicSteps;