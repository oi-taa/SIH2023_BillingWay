const chat = {
    1: {
        text: "Hi,I'm here to help you with any queries you may have. Feel free to ask me anything!",
        options: [
            {
                text: 'Hi',
                next: 2
            }
        ]
    },
    2: {
        text: 'How can I help you today?',
        options: [
            {
                text: "What is a tax invoice under GST?",
                next: 3
            },
            {
                text: "When should an invoice be raised?",
                next: 5
            },
            {
                text: "What happens if the invoice is not raised within 30 days?",
                next: 6
            },
            {
                text:"What is e-invoicing?",
                next:7
            },
            {
                text:"To whom is e-invoicing applicable?",
                next:8
            },
            {
                text:"How does the e-invoicing model work?",
                next:9
            },
            {
                text:"What are the methods for creating an e-invoice?",
                next:10
            },
            {
                text:"What data will be contained in an e-Invoice?",
                next:11
            },
            {
                text:"How can one verify the authenticity of an e-invoice?",
                next:12
            },
            {
                text:"What is the penalty for not generating e-invoices?",
                next:13
            }
        ]
    },
    3: {
        text: 'Under GST, all registered taxpayers must issue an invoice for the supply of goods or services. This document issued by the seller to the buyer for the sale of goods is called a tax invoice.<br> Any other questions?',
        options:[
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    4: {
        text: 'Goodbye! If you ever have more questions or need assistance in the future, feel free to return. Have a great day!',
    },
    5: {
        text: 'A supplier registered under GST should raise a GST invoice for the sale of goods or supply of services if the value of such supply exceeds Rs.200. In case of a supply of services, the invoice shall be issued before or after providing the service but not more than 30 days from the service date.<br> Any other questions?',
        options:[
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    6: {
        text: 'The taxpayer won’t claim Input Tax Credit (ITC) if the invoice is not raised within 30 days of the sale of goods. Only banks and financial institutions can raise invoices within 45 days from the supply of services.<br> Any other questions?',
        options:[
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    7: {
        text: 'e-Invoicing is a method of raising invoices in which the GSTN authenticates all B2B invoices for further use on the GST portal. A unique invoice registration number is issued against each invoice.<br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    8: {
        text: 'e-Invoicing was implemented in a phased manner in India.<br> 1. Businesses with a turnover exceeding Rs.500 crore- 1st October 2020<br>2. Businesses with a turnover exceeding Rs.100 crore- 1st January 2021<br>3. Businesses with a turnover exceeding Rs.50 crore- 1st April 2021. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    9: {
        text: 'Under the e-invoicing model, businesses will generate invoices on their ERPs in a specified format to ensure standardization and machine-readability. The invoice is then reported to the Invoice Registration Portal (IRP) of GST, which generates a unique IRN and QR code, digitally signs the invoice, and returns it to the supplier. The e-invoice data is then sent to the GST and e-way bill systems for auto-population of GSTR-1 return and e-way bill generation. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    10: {
        text: 'There are four methods for creating an e-invoice: using an offline tool, using ClearIRP.com, using GST Suvidha Provider, and through direct integration with IRP via API integration with sister concern GSTIN or using E-way Bill API credentials. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    11: {
        text: 'An e-Invoice will contain three parts: e-Invoice schema, Masters, and e-Invoice template. The e-Invoice schema includes technical field names and their descriptions, while Masters specify pre-defined inputs for certain fields. The e-Invoice template adheres to GST rules and designates mandatory fields in green and optional fields in yellow. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    12: {
        text: 'One can verify the correctness of an e-invoice by uploading the signed JSON into the e-invoice system and selecting the option ‘Verify Signed Invoice’ under the ‘Search’ option. Alternatively, one can download the QR Code Verify app and verify the QR code printed on the invoice. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    },
    13: {
        text: 'If a taxpayer fails to generate an e-invoice, they must pay 100% of the tax due or Rs.10,000, whichever is higher. Additionally, the penalty for incorrect invoicing is Rs.25,000 per invoice. <br> Any other questions?', 
        options: [
            {
                text:'Yes',
                next:2
            },
            {
                text:'No',
                next:4
            }
        ]
    }
};