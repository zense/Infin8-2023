import 'package:flutter/foundation.dart';
// ignore: import_of_legacy_library_into_null_safe
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/payment_item.dart';

class PaymentProvider with ChangeNotifier {
  List<PaymentItem> active_payments = []; // current list of active payments.
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
  // get all orders
  Future<void> fetchpayments() async {
    // Fetch all the payment objects!
    List<PaymentItem> curr_list = [];
    QuerySnapshot snapshots =
        await FirebaseFirestore.instance.collection('payments').get();

    for (var doc in snapshots.docs) {
      // for every payment document
      Map<String, dynamic> data = doc.data() as Map<String, dynamic>;
      if (data['status'] != 'processed') {
        String temp = "";
        if (data['multi'] == true) {
          temp = "YES";
        } else {
          temp = "NO!";
        } // Add that payment to the list of payments.
        curr_list.add(PaymentItem(
          team: temp,
          email: "test@gmail.com",
          event_name: map[int.parse(data['event_id'])].toString(),
          transaction_id: data['transaction_id'],
          upi_id: data['upi_id'],
          doc_id: doc.id,
          user_id: doc['user'],
        ));
      }
    }
    // After adding all the processing payments,notify the listener
    active_payments = curr_list;
    notifyListeners();
  }
}
