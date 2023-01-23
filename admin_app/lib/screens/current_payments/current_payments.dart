// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables, sized_box_for_whitespace, import_of_legacy_library_into_null_safe

import 'package:flutter/material.dart';
import 'package:admin_app/providers/payments_provider.dart';
import 'package:provider/provider.dart';
import 'package:admin_app/screens/current_payments/widgets/payment_card.dart'; // The Widget that will be printed
import 'package:admin_app/models/payment_item.dart';

class CurrentPaymentsPage extends StatefulWidget {
  const CurrentPaymentsPage({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _CurrentPaymentsState createState() => _CurrentPaymentsState();
}

class _CurrentPaymentsState extends State<CurrentPaymentsPage> {
  @override
  Widget build(BuildContext context) {
    //Fetch the latest payments.
    Provider.of<PaymentProvider>(context).fetchpayments();
    final active_payments =
        Provider.of<PaymentProvider>(context).active_payments;

    return Scaffold(
        body: SingleChildScrollView(
      child: Column(mainAxisAlignment: MainAxisAlignment.start, children: [
        Container(
          alignment: Alignment.topLeft,
          margin: EdgeInsets.fromLTRB(15, 35, 10, 5),
          child: InkWell(
            onTap: () {
              // Do nothing for now
            },
            child: Icon(
              Icons.arrow_back_ios_new,
              color: Colors.black,
              size: 30,
            ),
          ),
        ),
        Container(
          alignment: Alignment.topLeft,
          margin: EdgeInsets.fromLTRB(20, 10, 10, 10),
          child: Text(
            "Current Payments",
            style: TextStyle(
              color: Color(0xFF0A191E),
              fontSize: 25,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
        SizedBox(
          height: 700,
          child: ListView.builder(
              scrollDirection: Axis.vertical,
              itemCount: active_payments.length,
              itemBuilder: (context, index) {
                PaymentItem pay = active_payments[index];
                return PaymentCard(
                  upi_id: pay.upi_id,
                  email: pay.email,
                  team: pay.team,
                  event_name: pay.event_name,
                  transaction_id: pay.transaction_id,
                  doc_id: pay.doc_id,
                  user_id: pay.user_id,
                );
              }),
        ),
      ]),
    ));
  }
} /*   */
