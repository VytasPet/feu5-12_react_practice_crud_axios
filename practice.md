# uzduotys

## delete

1. sukurti funkcija esancia PostPage pavadinimu deletePostHandler()
2. paspaudus delete mygtuka vygdyti funkcija esancia PostPage pavadinimu deletePostHandler()
3. funkcija iskonsolina id kuri post istrinti
4. funkcija siuncia axios.delete() uzklausa istrinti postui adresu http://localhost:5000/posts/555, kur 555 butu post id
5. gavus sekminga pranesima apie istrynima is naujo parsiunciame postus is back end.
6. gavus sekminga pranesima istriname posta is savo state ir atvaizduojame sarasa be to post

## create context

1. sukurti AuthContext conteksta
2. sukurti AuthProvider componenta kuris grazins AuthContext.Provider si value reiksme
3. AuthProvider reikia state email, token ir login, loguot fn
4. paduodam authCtx objekta kuriame yra visos 3 punkto reikmes
5. main.jsx apjuosiam App su AuthProvider
6. LoginForm mes panaudojam useContext hook kada gauti login funkcija ir ja ivygdyti, paduodant email ir token reikmes
7. isvesti is state token reikmes kintamaji isLoggedIn kuri turetu buti boolean tipo
