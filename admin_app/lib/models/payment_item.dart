class PaymentItem {
  final String event_name;
  final String team;
  final String transaction_id;
  final String upi_id;
  final String email;
  final String doc_id;
  final String user_id;
  PaymentItem({
    required this.event_name,
    required this.team,
    required this.transaction_id,
    required this.upi_id,
    required this.email,
    required this.doc_id,
    required this.user_id,
  });
}
