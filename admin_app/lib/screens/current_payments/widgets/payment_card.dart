// ignore: import_of_legacy_library_into_null_safe
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class PaymentCard extends StatelessWidget {
  final String event_name;
  final String team;
  final String transaction_id;
  final String upi_id;
  final String email;
  final String user_id;
  final doc_id;

  const PaymentCard({
    Key? key,
    required this.event_name,
    required this.team,
    required this.transaction_id,
    required this.upi_id,
    required this.email,
    required this.doc_id,
    required this.user_id,
  }) : super(key: key);
  Future<void> accept_payment() async {
    // Mark the payment as accepted in payment object!!
    await FirebaseFirestore.instance
        .collection("payments")
        .doc(doc_id)
        .update({"status": "processed"});

// Fetch the payment object.
    DocumentSnapshot snapshot = await FirebaseFirestore.instance
        .collection("payments")
        .doc(doc_id)
        .get();

    if (snapshot.exists) {
      // data is basically the user object in json form.
      Map<String, dynamic> data = snapshot.data() as Map<String, dynamic>;
      if (data['multi']) {
        var userID = data['user'];
        var eventID = data['event_id'];
        //Fetch the user document
        DocumentSnapshot usr = await FirebaseFirestore.instance
            .collection('users_list')
            .doc(userID)
            .get();
        // Fetch the users event map!!
        Map<String, dynamic> usrdata = usr.data() as Map<String, dynamic>;
        var teamID = usrdata['eventTeamMap'][eventID];

        //Marking the status of the payment in the teams collection too.
        // one more write!!
        await FirebaseFirestore.instance
            .collection("teams")
            .doc(teamID)
            .update({"status": "processed"});
      }
    }
  }

  Future<void> reject_payment() async {
    // First send a mail and then delete the payment object.
    DocumentSnapshot snapshot = await FirebaseFirestore.instance
        .collection('users_list')
        .doc(user_id)
        .get();

    if (snapshot.exists) {
      // data is basically the user object in json form.
      Map<String, dynamic> data = snapshot.data() as Map<String, dynamic>;

      String _name = data['name'];
      String _email = data['email'];
      // Sending the mail:
      final url = Uri.parse("https://api.emailjs.com/api/v1.0/email/send");
      final response = await http.post(url,
          headers: {
            'origin': 'http:localhost',
            'Content-Type': 'application/json'
          },
          body: jsonEncode({
            "service_id": "service_8fqveoq",
            "template_id": "template_6hbu2ba",
            "user_id": "iosZ_TbFzinMZk4o5",
            "template_params": {
              "name": _name,
              "to_email": _email,
              "upi_id": upi_id,
              "transaction_id": transaction_id,
              "event_name": event_name,
            }
          }));

      DocumentSnapshot paysnap = await FirebaseFirestore.instance
          .collection("payments")
          .doc(doc_id)
          .get();

      if (paysnap.exists) {
        // data is basically the user object in json form.
        Map<String, dynamic> paydata = paysnap.data() as Map<String, dynamic>;
        print(paydata);

        if (paydata['multi']) {
          var eventID = paydata['event_id'];
          DocumentSnapshot usr = await FirebaseFirestore.instance
              .collection('users_list')
              .doc(user_id)
              .get();
          Map<String, dynamic> usrdata = usr.data() as Map<String, dynamic>;
          var teamID = usrdata['eventTeamMap'][eventID];
          await FirebaseFirestore.instance
              .collection("teams")
              .doc(teamID)
              .delete();
        }

        await FirebaseFirestore.instance
            .collection("payments")
            .doc(doc_id)
            .delete();
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.only(
            bottomLeft: Radius.circular(10), bottomRight: Radius.circular(10)),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            blurRadius: 2.0,
            spreadRadius: 0.0,
            offset: const Offset(0, 2),
          ), //BoxShadow
          //BoxShadow
        ],
      ),
      // alignment: Alignment.topLeft,
      margin: const EdgeInsets.fromLTRB(10, 10, 10, 10),
      child: Card(
        color: Colors.white,
        //  elevation: 3,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10),
          side: BorderSide(
            color: Colors.grey.withOpacity(0.1),
            width: 1,
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(2),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.fromLTRB(10.0, 0.0, 10.0, 10.0),
                // the Accept and Reject buttons
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Container(
                      height: 34,
                      width: 98,
                      decoration: BoxDecoration(
                        color: const Color(0xFF35BF7D),
                        borderRadius: const BorderRadius.only(
                            bottomLeft: Radius.circular(10),
                            bottomRight: Radius.circular(10)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.25),
                            blurRadius: 4.0,
                            spreadRadius: 2.0,
                            offset: const Offset(0, 2),
                          ), //BoxShadow
                          //BoxShadow
                        ],
                      ),
                      child: TextButton(
                        onPressed: () {
                          accept_payment();
                        },
                        child: const Text(
                          "Accept",
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ),
                    Container(
                      height: 34,
                      width: 98,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFF6838),
                        borderRadius: const BorderRadius.only(
                            bottomLeft: Radius.circular(10),
                            bottomRight: Radius.circular(10)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.25),
                            blurRadius: 4.0,
                            spreadRadius: 0.0,
                            offset: const Offset(0, 2),
                          ), //BoxShadow
                          //BoxShadow
                        ],
                      ),
                      child: TextButton(
                          onPressed: () {
                            reject_payment();
                          },
                          child: const Text(
                            "Reject",
                            style: TextStyle(color: Colors.white),
                          )),
                    ),
                  ],
                ),
              ),
              const Divider(
                thickness: 1,
              ),
              // Print Payment related data here!!
              Padding(
                padding: const EdgeInsets.fromLTRB(50, 0, 70, 10),
                child: Column(
                  children: [
                    const Text(
                      "Payment Details: ",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "Team Event: $team",
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "Event_name: $event_name",
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "Transaction Id: $transaction_id",
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      "UPI Id: $upi_id",
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
