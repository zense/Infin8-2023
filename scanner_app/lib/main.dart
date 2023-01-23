import 'dart:async';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:scanner_app/user.dart';
import 'firebase_options.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  // User Object to print if the user exists!
  User u = User(name: 'Exmaple', email: 'example@gmail.com');
  bool user_exists = false; // Flag to tell if the user exists!

  var map = <int, String>{
    1: 'MAD MIX!',
    2: 'ROCK ON!',
    3: 'BLASTOFF',
    4: 'Clash Royale',
    5: 'Call Of Duty Mobile',
    6: 'Nritta',
    7: 'Cut To The Chase',
    8: 'Take The Stage',
    9: 'Brush Up',
    10: 'Ramp It Up',
    11: 'Sargam',
    12: 'Pratibimbh 2.0',
    13: 'War Of Words',
    14: 'League Of Fanatics',
    15: 'Dumb Charades',
    16: 'Gulp And Gobble',
    17: 'Valorant',
  };

  @override
  void initState() {
    super.initState();
  }

  Future<void> fetch_details(String val) async {
    DocumentSnapshot payment;
    DocumentSnapshot snapshot = await FirebaseFirestore.instance
        .collection('users_list')
        .doc(val)
        .get();
    if (snapshot.exists) {
      Map<String, dynamic> data = snapshot.data() as Map<String, dynamic>;
      String _name = data['name'];
      String _email = data['email'];

      setState(() {
        user_exists = true;
        u.name = _name;
        u.email = _email;
        u.events = [];
      });
      var paymentDetails = data['paymentDetails'] as Map<String, dynamic>;

      paymentDetails.forEach((key, value) async {
        if (value != "Register") {
          // Lets make another Firebase call to find the payment object!
          payment = await FirebaseFirestore.instance
              .collection('payments')
              .doc(value)
              .get();
          if (payment.exists && payment['status'] == 'processed') {
            setState(() {
              u.events.add(map[int.parse(key)]!);
            });
          }
        }
      });
      setState(() {});
    } else {
      setState(() {
        // If user doesnt exist set it to false;
        user_exists = false;
      });
    }
  }

  Future<void> scanQR() async {
    String barcodeScanRes;
    try {
      barcodeScanRes = await FlutterBarcodeScanner.scanBarcode(
          '#ff6666', 'Cancel', true, ScanMode.QR);
    } on PlatformException {
      barcodeScanRes = 'Failed to get platform version.';
    }
    setState(() {
      fetch_details(barcodeScanRes);
    });
  }

  BuildUser(User u) {
    String name = u.name;
    String email = u.email;
    var events = u.events;
    return Column(
      children: <Widget>[
        Text("Name: $name"),
        const SizedBox(height: 5),
        Text("Email: $email"),
        const SizedBox(height: 5),
        const Text("Registered Events list: "),
        //Printing events!
        Column(
          children: List.generate(events.length, (index) {
            return Text(
              events[index].toString(),
            );
          }),
        ),
      ],
    );
  }

//barcode scanner flutter ant
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            appBar: AppBar(title: const Text('QR-Code Scanner')),
            body: Builder(builder: (BuildContext context) {
              return Container(
                  alignment: Alignment.center,
                  child: Flex(
                    direction: Axis.vertical,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      ElevatedButton(
                          onPressed: () => scanQR(),
                          child: const Text('QR scan')),
                      user_exists
                          ? BuildUser(u)
                          // Print User Object Here!
                          : const Text("User Doesnt Exist!!"),
                    ],
                    // Text('Name : $name\n')
                  ));
            })));
  }
}

// QR Code Scanner Flutter App!
