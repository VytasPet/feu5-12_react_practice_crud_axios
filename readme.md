## Steps

1. pradeti nauja projekta
2. sukurti pages direktorija, HomePage, LoginPage, ContactPage psl
3. Padaryti kad veiktu routeris.
4. atsikopijuoti Headeri is pries tai projekto (styled)
5. susisinstaliuoti styled-components.
6. LoginPage sukurti LoginForm komponenta.
7. LoginForm turi email ir password.
8. validuojam laukus ir valdo forma su Formik
9. klaidos turi matytis po inputais ir ant inputu

# Posts

1. sukurti PostsPage.jsx
2. Prideti Route ir i navigacija
3. Komponente parsiusti posts is http://localhost:5000/posts
4. iskonsolinti parsiustus posts.
5. sugeneruoti postu korteles is gautu duomenu

## NewPost forma

1. Sukurti forma kuri tures siuot inputus:
   - title
   - body
   - author
   - tags
   - date
2. validuoti visus laukus
3. forma pateikiant sugeneruoti objekta kaip pateikta zemiau

```json
{
  "title": "James",
  "body": "This is a test post.",
  "author": "John Doe",
  "tags": ["test", "example"],
  "date": "2022-04-03"
}
```

4. siunciam i http://localhost:5000/posts su Post metodu

## localus back endas

- https://github.com/MariusCodeAcademy/blog_api_crud_be_json_server
