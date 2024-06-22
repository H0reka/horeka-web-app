import React from "react";
import './terms.css'
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <motion.div  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.3 }}>
      <div className="header-section">
        <div className="container-flex">
          <motion.div className="title-wrap-centre" initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <h1 className="header-h1">Merchant Terms and Conditions</h1>
          </motion.div>
        </div>
      </div>
      <div className="container p-[30px] text-left">
        <p className="text-[16px]">
          These Terms form an integral part of the Merchant Enrolment Form for
          Horeka.app by Horeka Food Works LLP ("Form") and constitute a legally
          binding agreement made between you, whether personally or on behalf of
          an entity (the "Merchant"), and Horeka Food Works LLP Horeka.app and
          its affiliates (collectively, "Horeka Food Works LLP"), regarding the
          use of Horeka.app Platform (as defined below) for the purchase of
          Goods and Services (as defined below) by the Merchant from Horeka Food
          Works LLP.
        </p>
        <ul>
          <li>
            <div>
              <h5 className='text-[18px]'>Definition</h5>
              <ul className="bullet-list">
                <li>
                  'Commencement Date' means the date on which the Merchant
                  receives a confirmation email from Horeka Food Works LLP upon
                  successful completion of the sign-up process on the Horeka.app
                  Platform or the date of execution of the Form, whichever is
                  earlier.
                </li>
                <li>
                  'Credit Facility' means the option availed by the Merchant
                  (known as Postpaid Merchant) to place Order(s) on a credit
                  basis during the Credit Period.
                </li>
                <li>
                  'Credit Limit' means the maximum amount that the Merchant is
                  permitted to keep as outstanding during the Credit Period
                  which may be revised by Horeka Food Works LLP at its sole
                  discretion without any prior intimation. This Credit Limit
                  shall be communicated by Horeka Food Works LLP to the Merchant
                  in writing from time to time, through the application (i.e
                  app).{" "}
                </li>
                <li>
                  'Credit Period' means the period as communicated by Horeka
                  Food Works LLP to the Merchant, within which the Merchant
                  shall clear all its outstanding dues.{" "}
                </li>
                <li>
                  'Goods' shall mean the goods available on the Horeka.app
                  Platform.
                </li>
                <li>
                  ‘Services' shall mean the services available on the Horeka.app
                  Platform.
                </li>
                <li>
                  'Horeka.app Platform' means the online technology platform
                  owned by Horeka Food Works LLP where the Goods and Services
                  are displayed and the Merchant can place Order(s) for the
                  Goods and Services.
                </li>
                <li>
                  'Delivery Boy' means people who deliver Goods to merchants on
                  behalf of Horeka.app.
                </li>
                <li>
                  'Logistics Partner' means third party logistics service
                  provider, who delivers the Goods to the Merchant.
                </li>
                <li>
                  'Merchant' means the entity/individual being the legal
                  owner/operator in the HORECA (hotel, restaurant or catering)
                  sector as mentioned in the Form.
                </li>
                <li>
                  'Merchant Content' means any content including reviews,
                  images, photos, audio, video, location data, nearby places,
                  and all other forms of information or data provided on the
                  Horeka.app Platform.
                </li>
                <li>
                  'Order(s)' means an order placed by the Merchant with Horeka
                  Food Works LLP for the purchase of Goods via the Horeka.app
                  Platform or otherwise through offline assisted sales.
                </li>
                <li>'Parties' means Horeka Food Works LLP and the Merchant.</li>
                <li>
                  'Perishable Goods' shall mean goods including bakery items,
                  fruits and vegetables, frozen products, dairy products,
                  chicken and eggs, mutton and seafood etc. that have a limited
                  shelf life and are prone to spoilage, decay, and/or
                  deterioration.
                </li>
                <li>
                  'Price' means the selling price of the Goods as indicated on
                  the Horeka.app Platform and/or communicated by Horeka Food
                  Works LLP to the Merchant at the time of placing Order(s)
                  and/or as intimated by Horeka Food Works LLP to the Merchant
                  from time to time.
                </li>
                <li>
                  ‘Services’ means the services offered by Horeka Food Works LLP
                  to the Merchant through the Horeka.app Platform.
                </li>
                <li>
                  'Website' means www.Horeka.app (including the webpages
                  contained or hyperlinked therein and owned or controlled by
                  Horeka Food Works LLP), and such other media or media
                  channels, devices, mobile applications, software, or
                  technologies as Horeka Food Works LLP may choose from time to
                  time.
                </li>
                <li>
                  'Horeka Food Works LLP Content' means the content that Horeka
                  Food Works LLP creates and makes available in connection with
                  the Horeka.app Platform and the Goods including, but not
                  limited to, visual interfaces, interactive features, graphics,
                  design, compilation, computer code, products, software,
                  aggregate ratings, reports and other usage-related data in
                  connection with the activities associated with the Merchant’s
                  account.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            General Understanding   
              </h5>
                <p className="text-[16px]">Horeka Food Works LLP will list and display the Goods and the Prices on the Horeka.app Platform. The Merchant, upon signing up on the Horeka.app Platform, may use the Horeka.app Platform to browse, select and place Order(s) for purchase of the Goods.</p>
                <p className="text-[16px]">Once the Order is placed, Horeka Food Works LLP will indicate the tentative delivery time on the Horeka.app Platform and provide the Merchant with functionality to check for updates on the delivery status of the Order. </p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            QUALITY STANDARDS; COMPLIANCE WITH APPLICABLE LAW:
              </h5>
                    <ul className="bullet-list">
                    <li>Horeka Food Works LLP will supply the Goods based on the description and specification of the Order(s) placed by the Merchant from time to time.
                    </li>
                    <li>
                    Parties shall conduct themselves in accordance with these terms and be in compliance with all applicable laws.
                    </li>
                    <li>The Merchant understands and agrees that Horeka Food Works LLP shall never be liable for manufacturing and/or manufacturing relating aspects of the Goods, as Horeka Food Works LLP only sources the Goods from third-party manufacturers and supplies the Goods to the Merchant. It is hereby clarified that any issue concerning the manufacturing of the Goods including but not limited to quality, ingredients, shelf-life of the Goods, details on the packaging of the Goods etc., as may be required under applicable laws shall be the sole responsibility of the third party manufacturer and Horeka Food Works LLP shall not form Party to such disputes. Horeka Food Works LLP however shall extend its support to connect the Merchant with the third-party manufacturers. Further, Horeka Food Works LLP disclaims its liability concerning deliveries of the Goods where the Goods are directly delivered from the third-party manufacturer to the Merchant’s location.  </li>
                    <li>The Merchant understands and agrees that Horeka Food Works LLP does not accept any cash deposits into its bank account and the Merchant shall be solely liable and responsible for any consequences arising from making any cash deposits into Horeka Food Works LLP’s bank account. The Merchant hereby agrees that in case any cash deposits are done by the Merchant or any of its authorised representatives, Horeka Food Works LLP reserves the right to treat such cash deposit(s) in accordance with applicable tax laws and the Merchant shall indemnify Horeka Food Works LLP for any losses/consequence(s) which Horeka Food Works LLP may incur from treatment of such cash deposits in accordance with applicable tax laws. </li>
                    </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Term and Termination
              </h5>
                <p className="text-[16px]">The arrangement between the Parties shall start on the Commencement Date and unless terminated in accordance with this clause shall continue indefinitely ('Term').</p>
                <p className="text-[16px]">Either party may terminate the arrangement, with or without cause, at any time by giving a two (2) day prior notice to the other party.</p>
                <p className="text-[16px]">Horeka Food Works LLP reserves the right to terminate the arrangement or suspend the access of Horeka.app Platform to the Merchant with immediate effect if:</p>
                <ul className="bullet-list">
                    <li>Merchant defaults in making timely payment for two (2) consecutive times;</li>
                    <li>Upon the happening of any of the insolvency events such as bankruptcy, appointment of a receiver, administrator, liquidator, winding up, dissolution;</li>
                    <li>Horeka Food Works LLP identifies any fraudulent and/or suspicious activity on the Merchant’s account;</li>
                    <li>The Merchant fails to comply with applicable laws and/or these Terms.</li>
                </ul>
                <p className="text-[16px]">Termination of the arrangement: (a) in accordance with its Terms, shall not affect the accrued rights or liabilities of the Parties at the date of termination; and (b) shall have no effect on: (i) the validity of Goods already supplied to the Merchant; or (ii) Merchant’s obligations to pay for Goods already purchased and/or delivered in accordance with these Terms.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Pricing of Goods
              </h5>
                <p className="text-[16px]">Horeka Food Works LLP agrees to sell the Goods to the Merchant at the Price as indicated on the Horeka.app Platform at the time of placing Order(s) or at such other price as mutually agreed between the Parties from time to time. Horeka Food Works LLP reserves the right to revise the said Price at its sole discretion at any given time without prior notice to the Merchant prior to placing of Order(s). </p>
                <p className="text-[16px]">Also, since Horeka Food Works LLP sells a portion of non-veg items at a multiple of the prices raised the KPTA, the platform may show the prices as - NA or Zero (0) but the prices will be changed in accordance to the agreed multiple in the final invoice.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Quality of Goods
              </h5>
               <ul className="bullet-list">
               <li>It will be the responsibility of the Merchant to check the quality and quantity of the Goods at the time of delivery. In case the Merchant fails to raise any concerns related to quantity and/or quality of the Goods at the time of delivery, the Merchant will not have the right to raise a replacement request thereafter. The Merchant agrees that Horeka Food Works LLP will not be responsible for any deficiency, damage, or claims as regards the quality or quantity of Goods after the Goods have been delivered to and accepted by the Merchant.</li>
                <li>The Merchant will utilize the Goods ordered from the Horeka.app Platform before the specified expiry date, failing which, Horeka Food Works LLP will not be held liable in any way for the quality of such Goods supplied.</li>
                <li>In the event the delivery of Perishable Goods is delayed due to any reason(s) attributable to the Merchant and the quality of such Perishable Goods is affected, the Merchant hereby agrees that Horeka Food Works LLP shall not issue any refunds for such Perishable Goods whose quality has been affected.</li>
                <li>The Merchant hereby agrees that any reverse pickup request of Order(s) shall be accepted by Horeka Food Works LLP only once a new Order request is placed with Horeka Food Works LLP, so that the reverse pickup can be done at the time of delivery of the new Order. Further, any reverse pickup request along with the new Order request shall have to be placed with Horeka Food Works LLP within a maximum period of 7 (seven) days from the date of delivery of Order which requires reverse pickup. Failure to initiate a reverse pickup within 7 (seven) days from the date of delivery will result in automatic expiration of the product return opportunity.</li>
               </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Delivery Timeline
              </h5>
                    <p className="text-[16px]">Order(s) placed by the Merchant through the Horeka.app Platform on any day will be delivered to the Merchant at the time-slot agreed at the time of placing the Order(s). Orders placed by the Merchant through the Horeka.app Platform will be delivered within the time-slot agreed upon at the time of placing the Order. However, the Merchant agrees that there can be a variation in the delivery timelines wherein an Order may be delivered 90 (ninety) minutes earlier or later than the selected time-slot and the same is communicated to the Merchant through the Horeka.app Platform. </p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Obligations of Merchant
              </h5>
                <ul className="bullet-list">
                <li>Merchant will make timely payment of invoices raised by Horeka Food Works LLP for the sale of Goods in accordance with the Form and/or these Terms. </li>
                <li>Merchant will accept the delivery of Goods once it arrives at the designated location of the Merchant, without causing any delay. Horeka Food Works LLP will attempt delivery only once. In case, there is a delay of more than ten (10) minutes in accepting the delivery of the Goods, Horeka Food Works LLP reserves the right to recall the Goods without refunding the payment for the Goods to the Merchant.</li>
                <li>Merchant will provide all information and support that may reasonably be requested by Horeka Food Works LLP to enable it to discharge its duties under these Terms.  </li>
                <li>If the delivery address of the Merchant requires delivery of the Goods on a higher floor (more than one (1) floors) of a building, it will be the Merchant’s sole responsibility to provide an elevator service/assistance to deliver the Goods to the designated address.</li>
                <li>Merchant will ensure that the information provided to Horeka Food Works LLP is current and accurate, including but not limited to the Merchant’s name, address, contact telephone number, email, manager/contact person details, delivery address, delivery times, and other relevant information.</li>
                <li>The Merchant may request for cancellation of Order(s) placed through the Horeka.app Platform, however, upon receiving such a request, Horeka Food Works LLP will review such request basis certain factors including but not limited to the timeline within which cancellation request is placed with Horeka Food Works LLP for canceling the specified Order(s). However, the Merchant hereby acknowledges that Horeka Food Works LLP does not guarantee any cancellation of Order(s) and related returns and/or refunds once the Order has been placed on the Horeka.app Platform.</li>
                <li>The Merchant will be solely responsible for the non-delivery of the Goods, in case the Merchant fails to accept the delivery of Goods at the designated location and within the agreed timelines due to reasons attributable to the Merchant. Horeka Food Works LLP further reserves the right to levy a penalty of INR 1500/- (Indian Rupees one thousand five hundred only) for the losses suffered by Horeka Food Works LLP due to such failure in accepting the delivery within the agreed timeline.</li>
                </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Invoice and Payments
              </h5>
                    <p className="text-[16px]">Horeka Food Works LLP will deliver the Goods along with the relevant invoice.
                    </p>
                    <p className="text-[16px]">In consideration for the Goods sold by Horeka Food Works LLP, the Merchant shall be liable to pay Horeka Food Works LLP the Price, as reflected on the Invoice shared at the time of delivery of Goods to the Merchant. </p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Merchants availing the Credit Facility:
              </h5>
                <p className="text-[16px]">Merchants who are eligible and avail the credit facility from Horeka Food Works LLP, agree to be bound by the following terms:</p>
                <ul className="bullet-list">
                    <li>They will clear the Invoices within the Credit Period as informed by Horeka Food Works LLP to the Merchant from time to time, failing which Horeka Food Works LLP reserves the right to disable the Merchant from placing any further Order(s) via Horeka.app Platform till such time the Merchant clears its outstanding dues in addition to taking appropriate legal action against the Merchant that may be available to Horeka Food Works LLP under these Terms or as per applicable laws. Horeka Food Works LLP, also reserves the right to, at its own discretion, levy an interest at the rate of 18% per annum for each day of overdue till the time the Merchant clears its outstanding dues.</li>
                    <li>Notwithstanding anything contrary contained in these Terms or the Form, the Merchant, on behalf of itself and all its affiliates, hereby unconditionally and irrevocably authorizes Horeka Food Works LLP and all Horeka Food Works LLP Group Companies to withhold and deduct any amounts payable to the Merchant under any agreement, arrangement or understanding between the Merchant and any Horeka Food Works LLP Group Company, and apply such amounts to set off any amounts owed by the Merchant to Horeka Food Works LLP under, or in connection with the Form and/or Terms. For the provisions of this clause, the term “Horeka Food Works LLP Group Company'' shall be deemed to include its parent company (i.e. Horeka Food Works LLP) and any of its affiliates and subsidiaries. </li>
                    <li>That any information provided by you including your PAN and GST details for the purposes of availing Services from Horeka Food Works LLP, may be shared by Horeka Food Works LLP with third party service provider(s) for evaluating (i) whether Horeka Food Works LLP can extend You the Credit Facility; and (ii) the Credit Limit which can be sanctioned to you by Horeka Food Works LLP. </li>
                    <li>That it shall for the purposes of availing Credit Facility (i) maintain sufficient funds in its bank account; and (ii) provide copy(ies) of undated cheques (“UDC”) and/or bank guarantees in favor of Horeka Food Works LLP, as a security for availing Credit Facility from Horeka Food Works LLP. The Merchant acknowledges and agrees that Horeka Food Works LLP reserves the right to encash the UDC and/or bank guarantees in case the Merchant defaults to clear any Invoice(s) within the Credit Period. </li>
                    <li>The Merchant will provide Goods and Service Tax Identification Number ('GSTIN'), Permanent Account Number ('PAN'), and such other documents as may be required by Horeka Food Works LLP for the purpose of generating appropriate Invoices and for settlement of payments.</li>
                    <li>Horeka Food Works LLP will raise the Invoice to the Merchant at the time of delivery of Goods containing such particulars as may be prescribed under the GST act and rules thereunder, as amended from time to time for the cost of Goods plus applicable taxes ('Invoice').</li>
                </ul>
                <p className="text-[16px]">The tax collected at source under  (“TCS”) u/s 206C(1H) of the Income Tax Act, 1961:</p>
                <ul className="bullet-list">
                    <li>Horeka Food Works LLP is required to collect tax at source against consideration collected above the threshold limit prescribed under the Income Tax Act, 1961 at the applicable rate. Horeka Food Works LLP hereby clarifies that TCS u/s 206C(1H) of the Income Tax Act, 1961 will be levied on the Invoice at the time of placing the Order(s) by the Merchant and on the full value as provided in the Invoice. </li>
                    <li>Horeka Food Works LLP will remit the collected TCS u/s 206C(1H) of the Income Tax Act, 1961, to the respective government account and report against the PAN as available on Horeka Food Works LLP records. Such remittances and reportings will be considered as complete fulfillment of Horeka Food Works LLP's obligations in this regard. Horeka Food Works LLP will share a quarterly TCS certificate with the Merchant within the time stipulated under the Income-tax Act. </li>
                    <li>The Merchant will be solely responsible to provide correct PAN details to Horeka Food Works LLP and reconcile TCS u/s 206C(1H) of the Income Tax Act, 1961, with the tax statements and certificates provided by Horeka Food Works LLP from time to time.</li>
                    <li>The Merchant may be eligible to claim credit of the TCS u/s 206C(1H) of the Income Tax Act, 1961, on the basis of tax returns filed by it with the relevant government tax authorities. Merchant acknowledges and agrees that it is the Merchant’s responsibility to reconcile and claim correct credit for the TCS u/s 206C(1H) of the Income Tax Act, 1961, for which the Merchant may be eligible. Merchant also agrees that in the event of any discrepancy between the returns filed by the Merchant and those filed by Horeka Food Works LLP, the values reported by Horeka Food Works LLP shall have precedence over the tax returns filed by the Merchant.</li>
                    <li>Any discrepancy identified at the time of reconciliation by the Merchant should be brought to the attention of Horeka Food Works LLP within a period of fifteen (15) days from the date of receipt of the TCS certificate. Any delay on this account will relieve Horeka Food Works LLP of any obligation to undertake  corrective action to resolve the discrepancy. Under no circumstances, Horeka Food Works LLP shall entertain any discrepancy in the reported value after 31st July of the year following the financial year to which the transactions were undertaken and reported.</li>
                    <li>Merchant agrees and acknowledges that Horeka Food Works LLP shall not be held liable in any manner in the event the Merchant does not receive the benefit of TCS due to incorrect particulars provided by the Merchant to Horeka Food Works LLP.</li>
                </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Effect of Termination
              </h5>
                <p className="text-[16px]">In case of termination of this arrangement, all pending undisputed Invoices will be paid by the Merchant to Horeka Food Works LLP, within a period of seven (7) days from the date of such termination, failing which, Horeka Food Works LLP will levy an interest at the rate of 18% per annum for each day of overdue till the time the Merchant clears its outstanding dues in addition to taking appropriate legal action against the Merchant that may be available to Horeka Food Works LLP under these Terms or as per applicable laws.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Ownership of Horeka Food Works LLP Content and Proprietary Rights
              </h5>
                <ul className="bullet-list">
                    <li>Horeka Food Works LLP solely and exclusively owns the Horeka Food Works LLP Content and all the copyrights, trademarks, service marks, logos, trade names, distinctive brand features, and other intellectual and proprietary rights throughout the world associated with the Horeka.app Platform and Horeka Food Works LLP Content (the 'IP Rights'), which may be protected by applicable intellectual property and proprietary rights and laws. The Merchant acknowledges that the Horeka.app Platform contains original works and has been developed, compiled, prepared, revised, selected, and arranged by Horeka Food Works LLP through the application of methods and standards of judgment developed and applied through the expenditure of substantial time, effort, and money, and constitutes the valuable intellectual property of Horeka Food Works LLP.
                    </li>
                    <li>Merchant agrees to protect Horeka Food Works LLP's IP Rights and the proprietary rights of all others having rights in the Horeka.app Platform during and after the Term and to comply with all reasonable written requests made by Horeka Food Works LLP or its suppliers and licensors of content or otherwise to protect their and others' contractual, statutory, and common law rights in the Horeka.app Platform. Merchant acknowledges and agrees that Horeka Food Works LLP (or Horeka Food Works LLP's licensors) own all legal rights, titles, and interests in and to Horeka.app Platform, including any IP Rights which subsist in the Horeka.app Platform (whether those rights happen to be registered or not, and wherever in the world those rights may exist). Unless the Merchant has agreed otherwise in writing with Horeka Food Works LLP, nothing in these Terms gives Merchant a right to use any of Horeka Food Works LLP's IP Rights.</li>
                    <li>Merchant agrees not to use any framing techniques to enclose any trademark or logo or other proprietary information of Horeka Food Works LLP; or remove, conceal, or obliterate any copyright or other proprietary notice or source identifier, including without limitation, the size, color, location, or style of any IP Rights and/or any other proprietary mark(s). Any infringement will lead to appropriate legal proceedings against the Merchant at the appropriate forum for seeking all available/possible remedies under applicable laws of the country. Merchants cannot modify, reproduce, publicly display or exploit in any form or manner whatsoever any of Horeka Food Works LLP Content in whole or in part except as expressly authorized by Horeka Food Works LLP.</li>
                </ul>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Confidentiality
              </h5>
              <p className="text-[16px]">Parties shall strictly protect the confidentiality of all information related to the other party, its affiliates, customers, or customers of affiliates including information relating to business plans, formulations, suppliers or Merchants, product details, packaging information, commercial details, and the facts and contents of these Terms, disclosed by either party or becoming known to either party during the term of these Terms, whether or not in writing and whether or not designated to be confidential ('Confidential Information'). Confidential Information does not include information that is or was, at the time of the disclosure: </p>
                <ul className="bullet-list">
                    <li>Generally known or available to the public;</li>
                    <li>Received by the receiving Party from a third party;</li>
                    <li>Already in receiving Party’s possession prior to the date of receipt from disclosing Party; or</li>
                    <li>Independently developed by the receiving Party without the use of the other Party’s Confidential Information.</li>
                </ul>
                <p className="text-[16px]">Merchant will immediately notify Horeka Food Works LLP if it becomes aware of or suspects any unauthorized use or access to the data or any other Confidential Information of Horeka Food Works LLP, and shall cooperate with Horeka Food Works LLP in investigation of such breach and the mitigation of any damage.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Disclaimers
              </h5>
                <p className="text-[16px]">To the fullest extent permitted by law, Horeka Food Works LLP and its affiliates, and each of their respective officers, directors, members, employees, and agents disclaim all warranties, express or implied, in connection with the Form, these Terms, and the Horeka.app Platform, and any use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose and non-infringement. Horeka Food Works LLP makes no warranties or representations about the accuracy or completeness of the content and data on Horeka.app Platform or the Horeka Food Works LLP content or the content of any other websites linked to the website, and assumes no liability or responsibility for any (a) errors, mistakes, or inaccuracies of content and materials, (b) personal injury or property damage, of any nature whatsoever, resulting from the Merchant's access to and use of Horeka.app Platform, (c) any unauthorized access to or use of Horeka Food Works LLP's servers and/or any and all personal information and/or financial information stored therein, (d) any interruption or cessation of transmission to or from the Horeka.app Platform (e) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Horeka.app Platform by any third party, and/or (f) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Horeka.app Platform.
                </p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Indemnity
              </h5>
                <p className="text-[16px]">The Merchant hereby undertakes to indemnify, hold harmless, and defend Horeka Food Works LLP against any and all claims, costs, damages and losses that may arise on account of breach of any Merchant obligation and/or any act or omission of the Merchant or its employees, provided such claim, cost, damage, or loss has not resulted from any gross negligence or wilful misconduct directly and solely attributable to Horeka Food Works LLP.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Limitation of Liability
              </h5>
                <p className="text-[16px]">Under no circumstances shall either party be liable for incidental, special, or consequential damages (however arising), including, but not limited to, loss of profit, loss of use or loss of revenue, or damage to business or reputation arising hereunder, whether or not such Party has been made aware of the possibility of such loss.
Notwithstanding anything contrary contained in these Terms, the maximum liability of Horeka Food Works LLP under this Form shall not exceed the total value of the Order under which the claim arose.
</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Notices
              </h5>
                <p className="text-[16px]">All notices will be given in writing by registered post, hand delivery, or by way of email to the following addresses:<br/>
If to Horeka Food Works LLP:<br/>
Attention of: Legal Team <br/>
Postal Address:<br/>
Ground Floor, 19/5, Bellandur Motherhood Hospital road, Bellandur, Bengaluru - 560103, Bangalore.<br/>
Email Address: hello@horeka.app
</p>
            <p className="text-[16px]">If to the Merchant:<br/>
To the email ID and address provided in the Form.<br/>
The notices shall be deemed to be received on the date of receipt if by registered post, on the date of delivery, if by hand delivery, and at the time the email is received in the inbox of the addressee, if by email.
</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Governing Law
              </h5>
                <p className="text-[16px]">The Form and/or these Terms shall be governed by, and construed in accordance with, the laws of India, without regard to the principles of conflict of laws. The Parties hereto consent to and agree to submit to the exclusive jurisdiction of the courts of New Delhi for any action or proceeding arising under or by reason of the Form and/or these Terms and to the venue of such action or proceeding in such courts.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Severability
              </h5>
                <p className="text-[16px]">If any part or any provision of the Form and/or these Terms is or becomes illegal, invalid, or unenforceable, that part or provision shall be ineffective to the extent of such invalidity or unenforceability only, without in any way affecting the validity or enforceability of the remaining parts of said provision or the remaining provisions of Form and/or these Terms. The Parties hereby agree to attempt to substitute any invalid or unenforceable provision with a valid or enforceable provision, which achieves to the greatest extent possible the economic, legal, and commercial objectives of the invalid or unenforceable provision.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Waiver
              </h5>
              <p className="text-[16px]">Each Party agrees that any delay or omission on the part of the other party to exercise any right, power, or remedy under the Form and/or these Terms will not automatically operate as a waiver of such right, power, or remedy or any other rights, powers, or remedies and no waiver will be effective unless it is in writing and delivered to the other party in the manner. Further, the waiver or the single or partial exercise of any right, power, or remedy by either party hereunder on one occasion shall not be construed as a bar to a waiver of any successive or other rights, powers, or remedies on any other occasion.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Entire Agreement
              </h5>
              <p className="text-[16px]">Form and/or these Terms, together with the other documents specifically attached to the Form or referred to herein, constitutes the entire agreement between the Parties with respect to the subject matter hereof, and supersedes all prior understandings, promises, representations, agreements, and negotiations between the Parties, oral or written. These Terms are an electronic record and do not require any physical or digital signature, as per the Information Technology Act, 2000.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            No Third Party Rights   
                
              </h5>
              <p className="text-[16px]">No term of the Form and these Terms shall be enforceable by a third party.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            No Assignment
              </h5>
                <p className="text-[16px]">The Merchant must not assign, transfer, charge or otherwise encumber, create any trust over or deal in any manner with the Form or any right, benefit or interest under it, nor transfer, novate or sub-contract any of the Merchant’s obligations under it.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
              Independent contractors
              </h5>
                <p className="text-[16px]">The Form does not create any agency, employment, partnership, joint venture, or other joint relationship. Horeka Food Works LLP and the Merchant are independent contractors and neither has any authority to bind the other.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Acceptance to Horeka Food Works LLP’s Privacy Policy{" "}
              </h5>
                <p className="text-[16px]">By signing the Form, the Merchant acknowledges and agrees to be bound by Horeka Food Works LLP’s privacy policy. The Merchant agrees that all communications including telephonic communications between Horeka Food Works LLP and the Merchant may be recorded.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
              Modification
              </h5>
                <p className="text-[16px]">By signing the Form, the Merchant acknowledges and agrees to be bound by Horeka Food Works LLP’s privacy policy. The Merchant agrees that all communications including telephonic communications between Horeka Food Works LLP and the Merchant may be recorded.</p>
            </div>
          </li>
          <li>
            <div>
              <h5 className='text-[18px]'>
            Loans through third parties for Orders
              </h5>
                <p className="text-[16px]">If the Merchant uses any third party credit facility, whether directly made available by any bank or financial institution either directly or through a lending service provider (“Lender”) for the purchase of any Goods on the Horeka.app Platform (“Loan”), the Merchant acknowledges and agrees that:</p>
                <ul className="bullet-list">
                    <li>The Merchant shall be solely responsible for the repayment of the Loan at all times (including in case of termination of the arrangement, if any, between Horeka Food Works LLP and such bank/ financial institution/ lending service provider);</li>
                    <li>The Merchant shall deal with the lending service provider and/or their lending partners directly for all queries/ grievances in relation to the Loan;</li>
                    <li>If any Loan is availed by the Merchant, and the Merchant defaults in its repayment obligations in relation to such Loan as communicated by the Lender or its representatives, Horeka Food Works LLP may, in its sole discretion, restrict the Merchant’s ability to make further purchases on the Horeka.app Platform. Horeka Food Works LLP shall not be responsible or held liable in any manner whatsoever for the same;</li>
                    <li>Horeka Food Works LLP and its affiliates are not and shall not be deemed to be a lender, a digital lending application or a lending service provider with respect to the Loan, as per the Guidelines on Digital Lending dated September 2, 2022, as amended from time to time.</li>
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Terms;
