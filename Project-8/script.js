// code by Satendra
let names = [
    { name: "Artificial Intelligence Advancements" },
    { name: "Advanced Algorithms" },
    { name: "Automated Systems" },
    { name: "Artificial Neural Networks" },
    { name: "Augmented Reality Applications" },
    { name: "Advanced Robotics" },
    { name: "Algorithmic Trading Strategies" },
    { name: "Automotive Innovations" },
    { name: "Aerospace Technologies" },
    { name: "Analytical Chemistry Techniques" },
    { name: "Biomedical Engineering Innovations" },
    { name: "Biometric Identification Systems" },
    { name: "Blockchain Technology Solutions" },
    { name: "Big Data Analytics" },
    { name: "Business Intelligence Tools" },
    { name: "Bioinformatics Applications" },
    { name: "Brain-Computer Interfaces" },
    { name: "Biomimicry Innovations" },
    { name: "Behavioral Economics Research" },
    { name: "Building Information Modeling" },
    { name: "Cybersecurity Protocols" },
    { name: "Cloud Computing Services" },
    { name: "Cognitive Computing Systems" },
    { name: "Computer Vision Applications" },
    { name: "Cryptocurrency Technologies" },
    { name: "Customer Relationship Management" },
    { name: "Clinical Trial Innovations" },
    { name: "Consumer Electronics Devices" },
    { name: "Communication Networks" },
    { name: "Chemical Engineering Advances" },
    { name: "Data Science Techniques" },
    { name: "Deep Learning Models" },
    { name: "Digital Transformation Strategies" },
    { name: "Distributed Ledger Technologies" },
    { name: "Digital Marketing Solutions" },
    { name: "Disruptive Technologies" },
    { name: "Drug Discovery Methods" },
    { name: "Digital Twin Applications" },
    { name: "Dynamic Pricing Strategies" },
    { name: "Decentralized Finance Platforms" },
    { name: "Eco-Friendly Practices" },
    { name: "Electric Vehicle Technologies" },
    { name: "Environmental Sustainability Initiatives" },
    { name: "Energy-Efficient Solutions" },
    { name: "Emerging Technologies" },
    { name: "Educational Technology Innovations" },
    { name: "Entertainment Industry Trends" },
    { name: "Ethical AI Development" },
    { name: "Epidemiological Research" },
    { name: "E-commerce Platforms" },
    { name: "Financial Investments Strategies" },
    { name: "Fintech Innovations" },
    { name: "Food Technology Developments" },
    { name: "Future Mobility Solutions" },
    { name: "Fashion Technology Trends" },
    { name: "Forensic Science Advances" },
    { name: "Facial Recognition Systems" },
    { name: "Flexible Electronics Technologies" },
    { name: "Functional Programming Languages" },
    { name: "Financial Inclusion Initiatives" },
    { name: "Game Development Platforms" },
    { name: "Genetic Engineering Techniques" },
    { name: "Geospatial Technologies" },
    { name: "Graphene Applications" },
    { name: "Green Building Technologies" },
    { name: "Gesture Recognition Systems" },
    { name: "Global Health Innovations" },
    { name: "Growth Hacking Strategies" },
    { name: "Graph Theory Applications" },
    { name: "Generative Adversarial Networks" },
    { name: "Healthcare Technologies" },
    { name: "Human Augmentation Technologies" },
    { name: "Human-Computer Interaction" },
    { name: "Hybrid Cloud Solutions" },
    { name: "High-Performance Computing" },
    { name: "Health Informatics Solutions" },
    { name: "Home Automation Systems" },
    { name: "Holographic Display Technologies" },
    { name: "Hyperloop Transportation Systems" },
    { name: "Haptic Feedback Devices" },
    { name: "Information Technology Trends" },
    { name: "Internet of Things Innovations" },
    { name: "Immersive Virtual Reality Experiences" },
    { name: "Intelligent Automation Solutions" },
    { name: "Innovations in Agriculture" },
    { name: "Industrial Internet of Things" },
    { name: "Inclusive Design Practices" },
    { name: "Influencer Marketing Strategies" },
    { name: "Innovations in Education" },
    { name: "Insurtech Developments" },
    { name: "Journalism Ethics" },
    { name: "Jurisprudence Developments" },
    { name: "Joint Ventures Strategies" },
    { name: "JavaScript Frameworks" },
    { name: "Knowledge Graph Technologies" },
    { name: "Kinetic Energy Harvesting" },
    { name: "Knowledge Management Systems" },
    { name: "Knowledge Representation Methods" },
    { name: "Kubernetes Deployments" },
    { name: "Knowledge-based Systems" },
    { name: "Kernel Methods in Machine Learning" },
    { name: "Key Performance Indicators (KPIs)" },
    { name: "Knowledge Discovery in Databases" },
    { name: "Knowledge Engineering Techniques" },
    { name: "Knowledge Extraction Methods" },
    { name: "Location-Based Services" },
    { name: "Language Processing Techniques" },
    { name: "Low-Code Development Platforms" },
    { name: "Lidar Technologies" },
    { name: "Learning Management Systems" },
    { name: "Lambda Calculus Applications" },
    { name: "Logistic Regression Models" },
    { name: "Linear Algebra Concepts" },
    { name: "Leadership Development Programs" },
    { name: "Laser Technology Innovations" },
    { name: "Machine Learning Models" },
    { name: "Mobile App Development" },
    { name: "Medical Imaging Technologies" },
    { name: "Microservices Architecture" },
    { name: "Multimodal Biometrics Systems" },
    { name: "Machine Vision Systems" },
    { name: "Materials Science Advances" },
    { name: "Market Segmentation Strategies" },
    { name: "Middleware Technologies" },
    { name: "Mobile Robotics Applications" },
    { name: "Natural Language Processing" },
    { name: "Neural Network Architectures" },
    { name: "Nanotechnology Innovations" },
    { name: "Network Security Solutions" },
    { name: "Next-Generation Sequencing" },
    { name: "NFC Technology Applications" },
    { name: "NLP-based Chatbot Development" },
    { name: "Node.js Frameworks" },
    { name: "Nonlinear Optimization Techniques" },
    { name: "Neuroscience Research" },
    { name: "Optical Character Recognition" },
    { name: "Online Learning Platforms" },
    { name: "Organic Electronics Technologies" },
    { name: "Operating System Developments" },
    { name: "Object Detection Algorithms" },
    { name: "Open Source Software Contributions" },
    { name: "Operational Risk Management" },
    { name: "Organizational Behavior Studies" },
    { name: "Outlier Detection Methods" },
    { name: "Observational Studies in Epidemiology" },
    { name: "Predictive Analytics Solutions" },
    { name: "Personalized Medicine Approaches" },
    { name: "Precision Agriculture Technologies" },
    { name: "Quantum Computing Advances" },
    { name: "Quantum Cryptography Solutions" },
    { name: "Quality Assurance Techniques" },
    { name: "Quantitative Finance Models" },
    { name: "Quantum Machine Learning" },
    { name: "Quantum Information Theory" },
    { name: "Query Optimization Techniques" },
    { name: "Robotics Innovations" },
    { name: "Remote Sensing Technologies" },
    { name: "Renewable Energy Solutions" },
    { name: "Robotic Process Automation" },
    { name: "Real-Time Data Analytics" },
    { name: "Responsive Web Design" },
    { name: "Revenue Management Strategies" },
    { name: "Reverse Engineering Methods" },
    { name: "Risk Assessment Techniques" },
    { name: "Robot-Assisted Surgery Systems" },
    { name: "Supply Chain Management" },
    { name: "Sustainable Development Goals" },
    { name: "Smart City Technologies" },
    { name: "Smart Grid Solutions" },
    { name: "Social Media Analytics" },
    { name: "Software as a Service (SaaS)" },
    { name: "System-on-Chip Design" },
    { name: "Software Engineering Principles" },
    { name: "Statistical Learning Methods" },
    { name: "Strategic Management Practices" },
    { name: "Telemedicine Technologies" },
    { name: "Text Analytics Solutions" },
    { name: "Transportation Innovations" },
    { name: "Tactical Edge Computing" },
    { name: "User Experience Design" },
    { name: "Unified Communications" },
    { name: "Unsupervised Learning Algorithms" },
    { name: "Urban Planning Strategies" },
    { name: "Usability Testing Methods" },
    { name: "Universal Design Principles" },
    { name: "Virtual Reality Applications" },
    { name: "Video Surveillance Systems" },
    { name: "Voice Recognition Technologies" },
    { name: "Vehicle-to-Everything (V2X) Communication" },
    { name: "Virtual Assistant Platforms" },
    { name: "Virtualization Technologies" },
    { name: "VLSI Design Techniques" },
    { name: "Value Proposition Design" },
    { name: "Venture Capital Investments" },
    { name: "Vulnerability Assessment Tools" },
    { name: "Wireless Communication Technologies" },
    { name: "Web Development Frameworks" },
    { name: "Web Scraping Techniques" },
    { name: "Web3 Technologies" },
    { name: "Water Purification Methods" },
    { name: "Wearable Technology Innovations" },
    { name: "Wind Energy Solutions" },
    { name: "Workflow Automation Systems" },
    { name: "Wi-Fi Networking Standards" },
    { name: "Web-Based Learning Platforms" },
    { name: "X-ray Imaging Technologies" },
    { name: "Xenobiology Research" },
    { name: "Xenotransplantation Techniques" },
    { name: "XML Data Processing" },
    { name: "XQuery Language Applications" },
    { name: "Xenomorphology Studies" },
    { name: "Xenon Gas Applications" },
    { name: "XSS Vulnerability Prevention" },
    { name: "Xilinx FPGA Development" },
    { name: "Xeriscaping Techniques" },
    { name: "Youth Empowerment Initiatives" },
    { name: "YouTube Content Creation" },
    { name: "Yield Optimization Strategies" },
    { name: "Yocto Project Development" },
    { name: "Yarn Package Management" },
    { name: "Yottabyte Data Storage" },
    { name: "Yoga Health Benefits" },
    { name: "Yield Farming Techniques" },
    { name: "Yoctosecond Time Measurements" },
    { name: "Yak Farming Practices" },
    { name: "Zero-Emission Vehicles" },
    { name: "Zero-Knowledge Proof Protocols" },
    { name: "Zoological Conservation Efforts" },
    { name: "Zettabyte Data Analysis" },
    { name: "Zeppelin Airship Innovations" },
    { name: "Z-Wave Home Automation" },
    { name: "Zinc-Air Batteries" },
    { name: "Zooplankton Ecology Studies" },
    { name: "Zero-Trust Security Models" },
    { name: "Zooarchaeology Research" }
]

let input = document.getElementById('inputField');
let overlayField = document.getElementById('overlayField');
let searchField = document.getElementById('searchField');

input.addEventListener('focus', function () {
    overlayField.style.display = 'block'; // will make that black overly visible
    document.body.style.overflow = 'hidden'; // to prevent scrolling
});
input.addEventListener('blur', function () {
    overlayField.style.display = 'none'; // back to normal state
    document.body.style.overflow = ''; // to enable scrolling
});

input.addEventListener('input', function () {
    let inputValue = input.value.trim(); // it will remove the lending and trailing whitespace
    if (inputValue === '') {
        searchField.style.display = 'none';
        return;
    }
    overlayField.style.display = 'block';
    document.body.style.overflow = 'hidden';

    //created a new array with input field
    let newNames = names.filter(obj => obj.name.toLowerCase().startsWith(inputValue.toLowerCase()));
    let temp = '';
    newNames.forEach(function (obj) {
        temp += `<div class="searchText"><i class="fa-solid fa-magnifying-glass"></i> <span class="text">${obj.name}</span> </div>`;
    });
    if (newNames.length === 0) {
        searchField.style.display = 'none';
        return;
    }
    searchField.style.display = 'block';
    searchField.innerHTML = temp;
});