export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  benefits: string[];
  applications: string[];
}

export const productsData: Product[] = [
  {
    id: 1,
    name: 'Smart Doser Sensor',
    slug: 'smart-doser',
    icon: '📡',
    category: 'Sensors',
    shortDescription: 'Advanced automatic dosing sensor system for chemical treatment optimization',
    description: 'Intelligent dosing control system with real-time monitoring and automated chemical injection capabilities. The Smart Doser Sensor provides precision control over chemical dosing operations, ensuring optimal treatment efficiency and cost-effectiveness.',
    features: [
      'Automatic calibration system',
      'Real-time monitoring and analytics',
      'Remote connectivity and cloud integration',
      'Low maintenance design',
      'Multi-parameter control',
      'Automated alerts and diagnostics'
    ],
    specifications: {
      'Input Range': '0-100 mg/L (configurable)',
      'Accuracy': '±2% of reading',
      'Response Time': '< 30 seconds',
      'Power Supply': '230V AC single phase',
      'Output Interface': 'Modbus TCP/IP, 4-20mA',
      'Operating Temperature': '0-50°C'
    },
    benefits: [
      'Reduces chemical waste by up to 30%',
      'Improves treatment consistency',
      'Minimizes operator intervention',
      'Enables predictive maintenance',
      'Reduces operational costs',
      'Enhances system reliability'
    ],
    applications: [
      'Municipal water treatment',
      'Industrial cooling systems',
      'RO plant pre-treatment',
      'Swimming pool management',
      'Wastewater treatment',
      'Food and beverage processing'
    ]
  },

  {
    id: 2,
    name: 'Water Vending Machine',
    slug: 'water-vending',
    icon: '🚰',
    category: 'Dispensing',
    shortDescription: 'Commercial water vending and distribution system for high-volume applications',
    description: 'Complete water vending solution with integrated purification, dispensing, and payment processing capabilities. The system delivers clean, safe drinking water with minimal operational intervention.',
    features: [
      'High-capacity filtration system',
      'Digital payment integration (cash/card)',
      'Real-time monitoring and alerts',
      'Compact design with large storage',
      'Multiple dispensing options',
      'Self-diagnostic system'
    ],
    specifications: {
      'Daily Capacity': '800-1200 gallons',
      'Storage Capacity': '150 gallons',
      'Filtration Stages': '7-stage purification',
      'Power Requirement': '220V AC',
      'Dimensions': '36"H x 28"W x 24"D',
      'Operating Temperature': '10-40°C'
    },
    benefits: [
      'Generates 24/7 revenue stream',
      'Minimal staff involvement',
      'Reduces plastic bottle waste',
      'Ensures water quality consistency',
      'Low operational costs',
      'High customer satisfaction'
    ],
    applications: [
      'Shopping centers',
      'Office buildings',
      'Residential communities',
      'Hospitals and clinics',
      'Educational institutions',
      'Transport hubs'
    ]
  },
  {
    id: 3,
    name: 'RO Control Panels',
    slug: 'ro-panels',
    icon: '🎛️',
    category: 'Control Systems',
    shortDescription: 'Intelligent control systems for reverse osmosis water treatment plants',
    description: 'Advanced control and automation panels for RO systems with real-time diagnostics and remote monitoring. Ensures optimal RO plant performance with automated pressure control, flow management, and quality monitoring.',
    features: [
      'PLC-based automation system',
      'Real-time diagnostics and monitoring',
      'Remote access and control',
      'Multi-pump coordination',
      'Pressure and flow management',
      'Energy optimization algorithms'
    ],
    specifications: {
      'Control Type': 'Siemens/Allen-Bradley PLC',
      'Maximum Flow': '100-500 GPM (configurable)',
      'Operating Pressure': '150-600 PSI',
      'Input Signals': '4-20mA, digital inputs',
      'Output Control': 'VFD, solenoids, contactors',
      'Communication': 'Modbus, Ethernet, SCADA ready'
    },
    benefits: [
      'Increases RO membrane lifespan',
      'Reduces operating costs by 20%',
      'Minimizes product water loss',
      'Enables predictive maintenance',
      'Improves water quality consistency',
      'Reduces operator workload'
    ],
    applications: [
      'Municipal RO plants',
      'Industrial water purification',
      'Pharmaceutical manufacturing',
      'Food and beverage processing',
      'Mining water treatment',
      'Desalination plants'
    ]
  },
  {
    id: 4,
    name: 'Contactor-Based Control Panels',
    slug: 'contactor-panels',
    icon: '⚡',
    category: 'Control Systems',
    shortDescription: 'Robust electrical control panels for industrial equipment and pump management',
    description: 'Heavy-duty control panels featuring contactor-based switching for reliable operation in demanding industrial environments. Designed for long-term durability with high-capacity electrical control capabilities.',
    features: [
      'High-capacity switching (up to 100A)',
      'Thermal overload protection',
      'Industrial-grade components',
      'Custom configurations available',
      'Modular design for easy expansion',
      'IP65 enclosure rating'
    ],
    specifications: {
      'Rated Current': '50-100A',
      'Voltage': '230V/415V 3-phase',
      'Contactor Type': 'IEC standard contactors',
      'Enclosure': 'IP65 stainless steel',
      'Thermal Protection': 'Adjustable overloads',
      'Control Inputs': '24VDC logic'
    },
    benefits: [
      'Long operational lifespan',
      'Minimal maintenance requirements',
      'Reliable power switching',
      'Customizable for specific needs',
      'Cost-effective solution',
      'Easy installation and troubleshooting'
    ],
    applications: [
      'Pump motor control',
      'Compressor management',
      'Fan and blower control',
      'Heating system control',
      'Water treatment plant automation',
      'Industrial process control'
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(p => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return productsData;
}
