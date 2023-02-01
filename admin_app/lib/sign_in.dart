import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'main_screen.dart';

class SignIn extends StatefulWidget {
  const SignIn({Key? key}) : super(key: key);

  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  final _controllerEMail = TextEditingController();
  final _controllerPassword = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(primaryColor: Colors.blue),
        home: Scaffold(
          backgroundColor: Colors.white,
          body: Center(
              child: ListView(
            children: <Widget>[
              const Image(
                image: AssetImage('assets/auth.png'),
                fit: BoxFit.cover,
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: TextField(
                  controller: _controllerEMail,
                  cursorColor: Colors.blue,
                  cursorHeight: 25,
                  decoration: InputDecoration(
                      hintStyle: TextStyle(
                          color: Colors.blue[300], fontStyle: FontStyle.italic),
                      contentPadding: const EdgeInsets.all(20.0),
                      enabledBorder: const OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.blue),
                          borderRadius: BorderRadius.all(Radius.circular(30))),
                      border: const OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.blue),
                          borderRadius: BorderRadius.all(Radius.circular(30))),
                      labelText: 'IIITB E-Mail',
                      hintText: '@iiitb.ac.in',
                      prefixIcon: const Icon(
                        Icons.email_rounded,
                        color: Colors.blue,
                      )),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: TextField(
                  controller: _controllerPassword,
                  obscureText: true,
                  cursorColor: Colors.blue,
                  cursorHeight: 25,
                  decoration: const InputDecoration(
                      hoverColor: Colors.blue,
                      contentPadding: EdgeInsets.all(20.0),
                      enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.blue),
                          borderRadius: BorderRadius.all(Radius.circular(30))),
                      border: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.blue),
                          borderRadius: BorderRadius.all(Radius.circular(30))),
                      labelText:
                          // ignore: todo
                          'Password', // TODO show password or don't show password eye symbol
                      prefixIcon: Icon(
                        Icons.vpn_key_rounded,
                        color: Colors.blue,
                      )),
                ),
              ),
              Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: <Widget>[
                        GestureDetector(
                          child: Text(
                            "Forgot Password?",
                            style: TextStyle(color: Colors.blue[600]),
                          ),
                        )
                      ])),
              Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.blue,
                            elevation: 5,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(30.0),
                            ),
                          ),
                          onPressed: () {
                            _signIn();
                          },
                          child: const Text(
                            "Sign In",
                            style: TextStyle(color: Colors.white),
                          ),
                        )),
                  ]),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  GestureDetector(
                    child: const Text('Don\'t have an account?',
                        style: TextStyle(color: Color(0xFF2E3233))),
                    onTap: () {},
                  ),
                  GestureDetector(
                      child: const Text(
                    'Register.',
                    style: TextStyle(
                        color: Colors.blueAccent, fontWeight: FontWeight.bold),
                  ))
                ],
              ),
            ],
          )),
        ));
  }

  void _signIn() async {
    try {
      UserCredential userCredential = await FirebaseAuth.instance
          .signInWithEmailAndPassword(
              email: _controllerEMail.text, password: _controllerPassword.text);
      if (_controllerEMail.text == "manager@iiitb.ac.in") {
        Navigator.of(context).push(MaterialPageRoute(
            builder: (BuildContext context) => const MainScreen()));
      } else {}
    } on FirebaseAuthException catch (e) {
      if (e.code == 'user-not-found') {
      } else if (e.code == 'wrong-password') {}
    }
  }
}
