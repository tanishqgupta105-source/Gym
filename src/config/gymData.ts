// Image assets
import heroImage from '@/src/assets/images/hero_athlete_training_1791456180390.jpg';
import aboutImage from '@/src/assets/images/about_gym_facility_1791456198295.jpg';
import facilityFunctional from '@/src/assets/images/facility_functional_turf_1791456213904.jpg';
import facilityWeights from '@/src/assets/images/facility_weights_power_1791456305391.jpg';
import trainerArjun from '@/src/assets/images/trainer_arjun_strength_1791456224331.jpg';
import trainerRohan from '@/src/assets/images/trainer_rohan_verma_1791456292613.jpg';
import trainerAnanya from '@/src/assets/images/trainer_ananya_coach_1791456239623.jpg';

export interface GymConfig {
  brand: {
    name: string;
    subname: string;
    tagline: string;
    locationName: string;
    city: string;
    state: string;
    country: string;
    fullLocationLabel: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    whatsappMessage: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    landmark: string;
    mapQuery: string;
    embedMapUrl: string;
  };
  hours: {
    memberAccess: string;
    staffHoursWeekdays: string;
    staffHoursWeekends: string;
  };
  hero: {
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    image: string;
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
    sublabel: string;
  }>;
  programs: Array<{
    id: string;
    num: string;
    title: string;
    description: string;
    tag: string;
    duration: string;
    level: string;
    features: string[];
    bgImage: string;
  }>;
  facilities: Array<{
    id: string;
    title: string;
    category: string;
    description: string;
    specs: string;
    image: string;
    featured?: boolean;
  }>;
  trainers: Array<{
    id: string;
    name: string;
    role: string;
    experience: string;
    specialty: string;
    certifications: string[];
    image: string;
    quote: string;
  }>;
  memberships: {
    monthly: Array<{
      id: string;
      name: string;
      price: number;
      period: string;
      popular?: boolean;
      description: string;
      features: string[];
    }>;
    quarterly: Array<{
      id: string;
      name: string;
      price: number;
      period: string;
      popular?: boolean;
      discountText: string;
      description: string;
      features: string[];
    }>;
    annual: Array<{
      id: string;
      name: string;
      price: number;
      period: string;
      popular?: boolean;
      discountText: string;
      description: string;
      features: string[];
    }>;
  };
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    achievement: string;
    metric: string;
    quote: string;
    program: string;
  }>;
}

export const GYM_DATA: GymConfig = {
  brand: {
    name: 'ANYTIME FITNESS',
    subname: 'VIJAY NAGAR',
    tagline: 'Built Different. Train With Purpose.',
    locationName: 'Vijay Nagar',
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    country: 'India',
    fullLocationLabel: 'Vijay Nagar · Jabalpur, MP',
  },
  contact: {
    phone: '+919826000000',
    phoneDisplay: '+91 98260 XXXXX',
    whatsappNumber: '+919826000000',
    whatsappDisplay: '+91 98260 XXXXX',
    whatsappMessage: 'Hi Anytime Fitness Vijay Nagar, I would like to book a free VIP gym tour and trial session.',
    email: 'vijaynagar@anytimefitness.co.in',
    addressLine1: 'MR-4 Road, Near Kachnar City Gateway',
    addressLine2: 'Vijay Nagar, Jabalpur, Madhya Pradesh 482002',
    landmark: 'Opposite Premium Commercial Complex',
    mapQuery: 'Anytime Fitness Vijay Nagar Jabalpur Madhya Pradesh',
    embedMapUrl: 'https://maps.google.com/maps?q=Vijay+Nagar+Jabalpur+Madhya+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  hours: {
    memberAccess: '24 Hours / 7 Days / 365 Days Keyfob Access',
    staffHoursWeekdays: '6:00 AM – 10:00 PM (Mon – Sat)',
    staffHoursWeekends: '7:00 AM – 8:00 PM (Sunday)',
  },
  hero: {
    headlinePart1: 'BUILD YOUR',
    headlinePart2: 'STRONGEST SELF',
    subheadline: 'Premium international training. Certified coaches. Olympic-grade equipment. A luxury athletic community engineered to push you beyond limits.',
    image: heroImage,
  },
  stats: [
    {
      value: 24,
      suffix: '/7',
      label: 'HOURS ACCESS',
      sublabel: 'Train anytime with biometric keyfob',
    },
    {
      value: 500,
      suffix: '+',
      label: 'ACTIVE MEMBERS',
      sublabel: 'Dedicated community in Jabalpur',
    },
    {
      value: 50,
      suffix: '+',
      label: 'WORKOUT STATIONS',
      sublabel: 'Imported biomechanical equipment',
    },
    {
      value: 100,
      suffix: '%',
      label: 'COMMITMENT',
      sublabel: 'Certified guidance on every rep',
    },
  ],
  programs: [
    {
      id: 'strength',
      num: '01',
      title: 'STRENGTH TRAINING',
      description: 'Progressive overload, powerlifting mechanics, and heavy compound lifting designed to build indestructible functional strength.',
      tag: 'Peak Performance',
      duration: '60 Min Sessions',
      level: 'All Levels',
      features: ['Olympic Barbell Platforms', 'Squat & Bench Coaching', 'Periodized Load Programs'],
      bgImage: facilityWeights,
    },
    {
      id: 'hypertrophy',
      num: '02',
      title: 'MUSCLE BUILDING',
      description: 'Science-backed hypertrophy routines targeting localized tension, metabolic fatigue, and sculpted muscular density.',
      tag: 'Hypertrophy Focus',
      duration: '50-60 Min Sessions',
      level: 'Intermediate - Advanced',
      features: ['Custom Split Routines', 'Targeted Machine Biomechanics', 'Nutritional Macro Planning'],
      bgImage: heroImage,
    },
    {
      id: 'fat-loss',
      num: '03',
      title: 'FAT LOSS & METABOLIC',
      description: 'High-density metabolic conditioning combining interval training with resistance workouts to torch visceral fat while preserving lean tissue.',
      tag: 'Conditioning',
      duration: '45 Min High Output',
      level: 'Beginner - Advanced',
      features: ['Heart-Rate Zone Monitoring', 'Metabolic Sled & Turf Circuits', 'Body Composition Tracking'],
      bgImage: facilityFunctional,
    },
    {
      id: 'personal-coaching',
      num: '04',
      title: 'PERSONAL TRAINING',
      description: 'Elite 1-on-1 private coaching with international certified trainers tailored precisely to your posture, biomechanics, and calendar.',
      tag: 'VIP 1-on-1',
      duration: 'Flexible Schedule',
      level: 'Fully Customized',
      features: ['Movement Screen Analysis', 'Dedicated WhatsApp Accountability', 'Priority Equipment Reservation'],
      bgImage: aboutImage,
    },
    {
      id: 'functional',
      num: '05',
      title: 'FUNCTIONAL FITNESS',
      description: 'Athletic agility, core stability, kettlebells, and dynamic movement patterns engineered for everyday longevity and injury resilience.',
      tag: 'Mobility & Power',
      duration: '45-55 Min Sessions',
      level: 'All Levels',
      features: ['Turf Agility Ladders', 'Slam Balls & Battle Ropes', 'Joint Decompression Drills'],
      bgImage: facilityFunctional,
    },
    {
      id: 'beginner',
      num: '06',
      title: 'BEGINNER ONBOARDING',
      description: 'Step into the gym with absolute clarity and zero intimidation. Includes comprehensive machine induction and guided form mastery.',
      tag: 'Zero Intimidation',
      duration: '30-45 Min Intro',
      level: 'Novice Friendly',
      features: ['Complimentary Fit3D Assessment', 'Step-by-Step Equipment Guide', 'Trainer Supported Induction'],
      bgImage: aboutImage,
    },
  ],
  facilities: [
    {
      id: 'heavy-strength',
      title: 'Olympic Free Weights & Power Racks',
      category: 'Strength & Power',
      description: 'Calibrated steel plates, competition power cages, dumbbells up to 50kg, and shock-absorbing rubber lifting platforms.',
      specs: '10+ Multi-Benches · 4 Power Racks · Eleiko Barbells',
      image: facilityWeights,
      featured: true,
    },
    {
      id: 'turf-zone',
      title: 'High-Performance Functional Turf',
      category: 'Athletic Performance',
      description: '30-meter high-density synthetic turf track equipped with weighted push sleds, heavy kettlebells, and plyometric boxes.',
      specs: 'Prowler Sleds · Plyo Boxes · Suspension Trainers',
      image: facilityFunctional,
      featured: true,
    },
    {
      id: 'biomechanical-machines',
      title: 'Biomechanical Selectorized Machines',
      category: 'Targeted Isolation',
      description: 'Imported pin-loaded and plate-loaded machines engineered with convergent resistance curves to protect joints while maximizing tension.',
      specs: 'Life Fitness / Hammer Strength Calibrated Lines',
      image: aboutImage,
      featured: false,
    },
    {
      id: 'cardio-deck',
      title: 'Interactive Cardio Cinema Deck',
      category: 'Endurance & Cardio',
      description: 'Touchscreen treadmills, curved self-powered runners, stair climbers, and assault bikes with real-time biometric metrics.',
      specs: 'HD Touchscreens · Bluetooth Pairing · Fan Ventilation',
      image: heroImage,
      featured: false,
    },
  ],
  trainers: [
    {
      id: 'arjun',
      name: 'ARJUN SHARMA',
      role: 'Head Strength Coach',
      experience: '8+ Years Experience',
      specialty: 'Powerlifting & Biomechanics',
      certifications: ['CSCS Certified', 'K11 Strength Specialist', 'IPF State Medalist'],
      image: trainerArjun,
      quote: 'True strength is earned through discipline and unyielding consistency on the platform.',
    },
    {
      id: 'rohan',
      name: 'ROHAN VERMA',
      role: 'Senior Performance Coach',
      experience: '6+ Years Experience',
      specialty: 'Hypertrophy & Body Recomposition',
      certifications: ['ACE Certified Personal Trainer', 'Precision Nutrition Level 1'],
      image: trainerRohan,
      quote: 'We sculpt more than muscle; we build mental resilience that carries into every part of life.',
    },
    {
      id: 'ananya',
      name: 'ANANYA SINGH',
      role: 'Athletic Mobility & Conditioning Coach',
      experience: '5+ Years Experience',
      specialty: 'Functional Conditioning & Female Strength',
      certifications: ['CrossFit L2 Trainer', 'EXOS Performance Specialist', 'Pre/Post Natal Specialist'],
      image: trainerAnanya,
      quote: 'Movement is medicine. When you move well, you unlock levels of stamina you never knew existed.',
    },
  ],
  memberships: {
    monthly: [
      {
        id: 'starter',
        name: 'STARTER',
        price: 1999,
        period: '/ month',
        description: 'Ideal for independent gym enthusiasts who want unfettered access to premium equipment.',
        features: [
          'Full 24/7 Access to Vijay Nagar Club',
          'Imported Strength & Cardio Machines',
          'Locker & Shower Amenities Included',
          'Free High-Speed Wi-Fi & Lounge',
          'Mobile App Workout Log Access',
        ],
      },
      {
        id: 'pro',
        name: 'PRO CLUB',
        price: 2999,
        period: '/ month',
        popular: true,
        description: 'Our most sought-after plan for serious lifters wanting structured guidance and complete freedom.',
        features: [
          'Global 24/7 Access to 5,000+ Anytime Fitness Clubs',
          'Full Access to All Functional Turf & Free Weight Zones',
          'Comprehensive Monthly Body Composition Scan',
          'Unlimited Group Fitness Classes & HIIT Sessions',
          'Free Customized 4-Week Training Blueprint',
          'Locker, Steam & Luxury Towel Service',
        ],
      },
      {
        id: 'elite',
        name: 'ELITE VIP',
        price: 4999,
        period: '/ month',
        description: 'The definitive all-inclusive experience with dedicated 1-on-1 personal coaching.',
        features: [
          'Everything Included in PRO CLUB',
          '8 Dedicated 1-on-1 Personal Training Sessions/Mo',
          'Custom Nutritional Protocol & Weekly Macro Check-ins',
          'Direct WhatsApp Coach Access & Form Video Audits',
          'Priority Guest Passes (2 per month)',
          'Dedicated VIP Locker Assignment',
        ],
      },
    ],
    quarterly: [
      {
        id: 'starter-q',
        name: 'STARTER',
        price: 5299,
        period: '/ 3 months',
        discountText: 'Save 12%',
        description: 'Commit to your initial 90-day transformation foundation.',
        features: [
          'Full 24/7 Access to Vijay Nagar Club',
          'Imported Strength & Cardio Machines',
          'Locker & Shower Amenities Included',
          'Free High-Speed Wi-Fi & Lounge',
          'Initial Movement Assessment',
        ],
      },
      {
        id: 'pro-q',
        name: 'PRO CLUB',
        price: 7999,
        period: '/ 3 months',
        popular: true,
        discountText: 'Save 15%',
        description: '90 days of peak conditioning with multi-club access.',
        features: [
          'Global 24/7 Access to 5,000+ Anytime Fitness Clubs',
          'Full Access to All Functional Turf & Free Weight Zones',
          'Monthly Body Composition Scans',
          'Unlimited Group Fitness Classes & HIIT',
          'Full 12-Week Progressive Training Blueprint',
          'Locker & Luxury Amenities',
        ],
      },
      {
        id: 'elite-q',
        name: 'ELITE VIP',
        price: 13499,
        period: '/ 3 months',
        discountText: 'Save 15%',
        description: 'Quarterly full-spectrum coaching transformation.',
        features: [
          'Everything Included in PRO CLUB',
          '24 Dedicated 1-on-1 Personal Training Sessions',
          'Complete Macro & Nutritional Protocol',
          'Direct WhatsApp Coach Access',
          'Priority Guest Passes',
          'Dedicated VIP Locker',
        ],
      },
    ],
    annual: [
      {
        id: 'starter-a',
        name: 'STARTER',
        price: 17999,
        period: '/ year',
        discountText: 'Save 25%',
        description: 'Year-long unfettered access at maximum savings.',
        features: [
          'Full 24/7 Access to Vijay Nagar Club',
          'Imported Strength & Cardio Machines',
          'Locker & Shower Amenities Included',
          'Free High-Speed Wi-Fi',
          '1 Complimentary Personal Training Induction',
        ],
      },
      {
        id: 'pro-a',
        name: 'PRO CLUB',
        price: 26999,
        period: '/ year',
        popular: true,
        discountText: 'Save 25%',
        description: 'Our premier annual membership for lifelong fitness excellence.',
        features: [
          'Global 24/7 Access to 5,000+ Anytime Fitness Clubs Worldwide',
          'Full Functional Turf & Powerlifting Zones',
          'Bi-Weekly InBody Scans & Metric Audits',
          'Unlimited Group Classes (Zumba, HIIT, Strength)',
          'Annual Periodized Workout Library',
          'Complimentary Anytime Fitness Branded Gym Kit',
        ],
      },
      {
        id: 'elite-a',
        name: 'ELITE VIP',
        price: 44999,
        period: '/ year',
        discountText: 'Save 25%',
        description: 'The ultimate year-round high-performance mentorship.',
        features: [
          'Everything in PRO CLUB Worldwide Access',
          '96 1-on-1 Personal Training Sessions Across the Year',
          'Master Level Nutrition & Metabolic Tracking',
          'Daily Coach Chat & Priority Scheduling',
          'Unlimited Guest Privileges on Weekends',
          'VIP Locker & Recovery Zone Access',
        ],
      },
    ],
  },
  testimonials: [
    {
      id: 'rahul',
      name: 'Rahul Sharma',
      location: 'Vijay Nagar, Jabalpur',
      achievement: '-16 kg Body Fat · +4 kg Lean Muscle',
      metric: '6 Months Protocol',
      quote: 'Joining Anytime Fitness completely changed the way I approach fitness. The 24/7 access means I can train at 10 PM after clinic hours without rushing. The equipment standards in Jabalpur are genuinely unmatched.',
      program: 'Strength & Body Recomp',
    },
    {
      id: 'priya',
      name: 'Priya Kulkarni',
      location: 'Civic Centre, Jabalpur',
      achievement: 'Marathon Finisher · 120kg Deadlift PR',
      metric: '8 Months Training',
      quote: 'As a woman stepping into a gym, the environment here is safe, encouraging, and world-class. Coach Ananya helped me transition from cardio-only to heavy deadlifts with pristine form.',
      program: 'Functional Conditioning',
    },
    {
      id: 'amit',
      name: 'Amit Patel',
      location: 'Napier Town, Jabalpur',
      achievement: '-12% Body Fat · Reversal of Postural Issues',
      metric: '4 Months Protocol',
      quote: 'The level of coaching and the biomechanical machinery here is leagues ahead of typical local gyms. The air quality, cleanliness, and athletic vibe make you look forward to every single session.',
      program: 'Personal Coaching',
    },
  ],
};
