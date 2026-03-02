export interface SubModel {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  price: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  specifications: { [key: string]: string };
  benefits: string[];
  applications: string[];
  price: string;
  hasSubModels?: boolean;
  subModels?: SubModel[];
}

export const productsData: Product[] = [
  {
    id: 1,
    name: 'Smart Doser Sensor',
    slug: 'smart-doser',
    category: 'Sensors',
    shortDescription:
      'Advanced automatic dosing sensor system for chemical treatment optimization',
    description:
      'Intelligent dosing control system with real-time monitoring. The Smart Doser Sensor provides alerts over chemical dosing operations, ensuring there is safety for Dosing pump and preventing from malfunction.',
    image: '/images/products/smart-doser.png',
    features: [
      'Fuly automatic',
      'Auto-off and Auto-on functionality of dosing pump',
      'Universal compatibility with all dosing pumps',
      'Designed to long last',
    ],
    specifications: {
      'Input Range': '0-100 mg/L (configurable)',
      Accuracy: '+/-2% of reading',
      'Response Time': '< 10 seconds',
      'Power Supply': '230V AC single phase',
      'Output Interface': 'Sound Alarm',
      'Operating Temperature': '0-50 C',
    },
    benefits: [
      'Protects Dosing pump from air lock and dry running',
      'Enables predictive maintenance',
      'Reduces operational costs',
      'Enhances system reliability',
    ],
    applications: [
      'Water treatment plants',
      'Wherever dosing pump is used',
    ],
    price: '879/- INR',
  },
  {
    id: 2,
    name: 'Water Vending Machine',
    slug: 'water-vending',
    category: 'Dispensing',
    shortDescription:
      'Commercial water vending and distribution system for high-volume applications',
    description:
      'Complete water vending solution with dispensing, and payment processing capabilities. The system delivers clean, safe drinking water with minimal operational intervention.',
    image: '/images/products/water-vending.png',
    features: [
      'High-capacity filtration system',
      'Digital payment integration (coin/card/QR code)',
      'Real-time monitoring and alerts',
      'Compact design',
    ],
    specifications: {
      'Power Requirement': '220V AC',
      Dimensions: '36"H x 28"W x 24"D',
      'Operating Temperature': '10-60 C',
    },
    benefits: [
      'Generates 24/7 revenue stream',
      'Minimal staff involvement',
      'Reduces plastic bottle waste',
      'Low operational costs',
      'High customer satisfaction',
    ],
    applications: [
      'Village panchayats',
      'Shopping centers',
      'Office buildings',
      'Residential communities',
      'Hospitals and clinics',
      'Educational institutions',
      'Transport hubs',
    ],
    price: 'Contact for pricing',
  },
  {
    id: 3,
    name: 'RO Control Panels',
    slug: 'ro-panels',
    category: 'Control Systems',
    shortDescription:
      'Control Panels for reverse osmosis water treatment plants',
    description:
      'Advanced control and automation panels for RO systems with real-time diagnostics and remote monitoring. Ensures optimal RO plant performance with automated pressure control, flow management, and quality monitoring.',
    image: '/images/products/ro-panels.png',
    features: [
      'PCB-based automation system',
    ],
    specifications: {
      'Control Type': 'Siemens/Allen-Bradley PLC',
      'Maximum Flow': '100-500 GPM (configurable)',
      'Operating Pressure': '150-600 PSI',
      'Input Signals': '4-20mA, digital inputs',
      'Output Control': 'VFD, solenoids, contactors',
      Communication: 'Modbus, Ethernet, SCADA ready',
    },
    benefits: [
      'Increases RO membrane lifespan',
      'Reduces operating costs by 20%',
      'Minimizes product water loss',
      'Enables predictive maintenance',
      'Improves water quality consistency',
      'Reduces operator workload',
    ],
    applications: [
      'Municipal RO plants',
      'Industrial water purification',
      'Pharmaceutical manufacturing',
      'Food and beverage processing',
      'Mining water treatment',
      'Desalination plants',
    ],
    price: 'Contact for pricing',
    hasSubModels: true,
    subModels: [
      {
        id: 'ro-panel-basic',
        name: 'RO Panel - Basic',
        slug: 'ro-panel-basic',
        image: '/images/products/ro-panel-advanced.png',
        description:
          'Entry-level RO control panel designed for small to medium RO plants. Features essential monitoring and control capabilities with a compact footprint.',
        features: [
          'Single pump control with auto start/stop',
          'Pressure monitoring with safety cutoffs',
          'TDS meter with reject/accept control',
          'LED status indicators for system state',
          'Manual override capability',
          'Compact wall-mount enclosure',
        ],
        specifications: {
          'Control Type': 'Relay-based logic',
          'Max Flow': '100 GPM',
          'Operating Pressure': '150-300 PSI',
          Enclosure: 'IP54 mild steel',
          'Power Supply': '230V AC single phase',
          Dimensions: '18"H x 14"W x 8"D',
        },
        price: 'Contact for pricing',
      },
      {
        id: 'ro-panel-standard',
        name: 'RO Panel - LCD PRO',
        slug: 'ro-panel-standard',
        image: '/images/products/ro-panel-standard.png',
        description:
          'Mid-range RO control panel with PLC-based automation for medium to large RO plants. Includes HMI touchscreen for intuitive operation and comprehensive diagnostics.',
        features: [
          'PLC-based automation with HMI touchscreen',
          'Dual pump coordination with alternation',
          'Real-time flow and pressure monitoring',
          'Membrane flush cycle automation',
          'Data logging with USB export',
          'Alarm management with SMS alerts',
        ],
        specifications: {
          'Control Type': 'Siemens S7-1200 PLC',
          'Max Flow': '300 GPM',
          'Operating Pressure': '150-450 PSI',
          Enclosure: 'IP65 stainless steel',
          'Power Supply': '415V AC three phase',
          Dimensions: '24"H x 20"W x 10"D',
        },
        price: 'Contact for pricing',
      },
      {
        id: 'ro-panel-advanced',
        name: 'RO Panel - LCD Advanced+',
        slug: 'ro-panel-advanced',
        image: '/images/products/ro-panel-basic.png',
        description:
          'Premium RO control panel with full SCADA integration for large-scale and industrial RO plants. Features VFD-driven pumps, remote monitoring, and predictive analytics.',
        features: [
          'Full SCADA integration with remote access',
          'VFD-driven multi-pump control',
          'Predictive maintenance analytics',
          'Cloud-based data monitoring',
          'Energy optimization algorithms',
          'Modbus TCP/IP and Ethernet communication',
        ],
        specifications: {
          'Control Type': 'Allen-Bradley CompactLogix PLC',
          'Max Flow': '500 GPM',
          'Operating Pressure': '150-600 PSI',
          Enclosure: 'IP65 SS304 stainless steel',
          'Power Supply': '415V AC three phase',
          Dimensions: '36"H x 30"W x 12"D',
        },
        price: 'Contact for pricing',
      },
    ],
  },
  {
    id: 4,
    name: 'Contactor-Based Control Panels',
    slug: 'contactor-panels',
    category: 'Control Systems',
    shortDescription:
      'Robust electrical control panels for industrial equipment and pump management',
    description:
      'Heavy-duty control panels featuring contactor-based switching for reliable operation in demanding industrial environments. Designed for long-term durability with high-capacity electrical control capabilities.',
    image: '/images/products/contactor-panels.png',
    features: [
      'High-capacity switching (up to 100A)',
      'Thermal overload protection',
      'Industrial-grade components',
      'Custom configurations available',
      'Modular design for easy expansion',
      'IP65 enclosure rating',
    ],
    specifications: {
      'Rated Current': '50-100A',
      Voltage: '230V/415V 3-phase',
      'Contactor Type': 'IEC standard contactors',
      Enclosure: 'IP65 stainless steel',
      'Thermal Protection': 'Adjustable overloads',
      'Control Inputs': '24VDC logic',
    },
    benefits: [
      'Long operational lifespan',
      'Minimal maintenance requirements',
      'Reliable power switching',
      'Customizable for specific needs',
      'Cost-effective solution',
      'Easy installation and troubleshooting',
    ],
    applications: [
      'Pump motor control',
      'Compressor management',
      'Fan and blower control',
      'Heating system control',
      'Water treatment plant automation',
      'Industrial process control',
    ],
    price: 'Contact for pricing',
    hasSubModels: true,
    subModels: [
      {
        id: 'contactor-panel-single',
        name: '1-1 Control Panel',
        slug: 'contactor-panel-single',
        image: '/images/products/contactor-panel-single.png',
        description:
          'Basic contactor-based starter panel for single motor/pump applications. Features DOL starting with thermal overload protection and essential safety interlocks.',
        features: [
          'Direct-On-Line (DOL) starting',
          'Thermal overload relay protection',
          'Phase failure protection',
          'Start/Stop push buttons with indicators',
          'Emergency stop button',
          'Compact wall-mount design',
        ],
        specifications: {
          'Rated Current': 'Up to 32A',
          Voltage: '230V/415V AC',
          'Starting Method': 'DOL',
          Enclosure: 'IP54 mild steel',
          Protection: 'Thermal overload + MCB',
          Dimensions: '14"H x 10"W x 6"D',
        },
        price: 'Contact for pricing',
      },
      {
        id: 'contactor-panel-dual',
        name: '1-3 Control Panel',
        slug: 'contactor-panel-dual',
        image: '/images/products/contactor-panel-dual.png',
        description:
          'Dual pump contactor panel with automatic alternation and lead-lag control. Ensures balanced pump usage and provides redundancy for continuous operation.',
        features: [
          'Automatic lead-lag alternation',
          'Level-based pump sequencing',
          'Individual thermal overload protection',
          'Run hour meters for each pump',
          'Manual/Auto selector switch',
          'Fault indication with buzzer alarm',
        ],
        specifications: {
          'Rated Current': 'Up to 65A per pump',
          Voltage: '415V AC three phase',
          'Starting Method': 'DOL / Star-Delta',
          Enclosure: 'IP65 mild steel powder coated',
          Protection: 'Thermal overload + MCCB',
          Dimensions: '24"H x 18"W x 8"D',
        },
        price: 'Contact for pricing',
      },
      {
        id: 'contactor-panel-multi',
        name: '3-3 Control Panel',
        slug: 'contactor-panel-multi',
        image: '/images/products/contactor-panel-multi.png',
        description:
          'Advanced multi-pump contactor panel for controlling up to 4 pumps with automatic sequencing, pressure-based control, and comprehensive fault management.',
        features: [
          'Up to 4 pump sequential control',
          'Pressure transducer based operation',
          'Automatic duty cycling',
          'Individual and group fault management',
          'Digital ammeter and voltmeter',
          'PLC-based logic with timer controls',
        ],
        specifications: {
          'Rated Current': 'Up to 100A per pump',
          Voltage: '415V AC three phase',
          'Starting Method': 'Star-Delta / Soft Starter',
          Enclosure: 'IP65 stainless steel SS304',
          Protection: 'MCCB + overload + earth fault',
          Dimensions: '36"H x 30"W x 12"D',
        },
        price: 'Contact for pricing',
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getSubModelBySlug(
  productSlug: string,
  modelSlug: string
): SubModel | undefined {
  const product = getProductBySlug(productSlug);
  if (!product?.subModels) return undefined;
  return product.subModels.find((m) => m.slug === modelSlug);
}

export function getAllProducts(): Product[] {
  return productsData;
}
