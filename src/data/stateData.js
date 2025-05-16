export const stateData = {
  // Default data (used when state not found)
  default: {
    police: [
      {
        name: "Police Emergency",
        number: "100",
        location: "State Police Headquarters",
        hours: "24/7"
      },
      {
        name: "Women Helpline",
        number: "1091",
        location: "State Women Cell",
        hours: "24/7"
      },
      {
        name: "Crime Stopper",
        number: "1090",
        location: "State Police Control Room",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Government General Hospital",
        number: "104",
        location: "State Capital",
        hours: "24/7"
      },
      {
        name: "Emergency Ambulance",
        number: "102",
        location: "State Health Department",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      // District-specific data can override state data
      default: {
        police: [
          {
            name: "District Police Station",
            number: "100",
            location: "District Headquarters",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "District Hospital",
            number: "104",
            location: "District Headquarters",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Delhi
  delhi: {
    police: [
      {
        name: "Delhi Police Emergency",
        number: "100",
        location: "Police Headquarters, ITO",
        hours: "24/7"
      },
      {
        name: "Women Helpline Delhi",
        number: "1091",
        location: "Special Police Unit for Women",
        hours: "24/7"
      },
      {
        name: "Traffic Police",
        number: "1095",
        location: "Traffic Headquarters",
        hours: "24/7"
      },
      {
        name: "Anti-Stalking Helpline",
        number: "1096",
        location: "Delhi Police",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "AIIMS Emergency",
        number: "011-26588500",
        location: "Ansari Nagar",
        hours: "24/7"
      },
      {
        name: "Safdarjung Hospital",
        number: "011-26165060",
        location: "Ansari Nagar East",
        hours: "24/7"
      },
      {
        name: "Delhi Ambulance",
        number: "102",
        location: "Centralized Service",
        hours: "24/7"
      }
    ],
    womenHelpline: "181",
    childHelpline: "1098",
    districts: {
      "new-delhi": {
        police: [
          {
            name: "Connaught Place Police Station",
            number: "011-23490001",
            location: "Connaught Place",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Ram Manohar Lohia Hospital",
            number: "011-23365525",
            location: "Baba Kharak Singh Marg",
            hours: "24/7"
          }
        ]
      },
      "south-delhi": {
        police: [
          {
            name: "Hauz Khas Police Station",
            number: "011-26853800",
            location: "Hauz Khas",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Maharashtra
  maharashtra: {
    police: [
      {
        name: "Maharashtra Police Emergency",
        number: "100",
        location: "Police Headquarters, Mumbai",
        hours: "24/7"
      },
      {
        name: "Women Helpline Maharashtra",
        number: "103",
        location: "Mumbai Police",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "108",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "JJ Hospital Emergency",
        number: "022-23735555",
        location: "Byculla, Mumbai",
        hours: "24/7"
      },
      {
        name: "KEM Hospital",
        number: "022-24136000",
        location: "Parel, Mumbai",
        hours: "24/7"
      },
      {
        name: "State Ambulance Service",
        number: "108",
        location: "Across Maharashtra",
        hours: "24/7"
      }
    ],
    womenHelpline: "103",
    childHelpline: "1098",
    districts: {
      "mumbai-city": {
        police: [
          {
            name: "Colaba Police Station",
            number: "022-22856220",
            location: "Colaba",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Bombay Hospital",
            number: "022-22067676",
            location: "Marine Lines",
            hours: "24/7"
          }
        ]
      },
      "pune": {
        police: [
          {
            name: "Pune City Police",
            number: "020-26123333",
            location: "Pune",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Sassoon Hospital",
            number: "020-26128000",
            location: "Pune",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Tamil Nadu
  "tamil-nadu": {
    police: [
      {
        name: "Tamil Nadu Police Emergency",
        number: "100",
        location: "Chennai",
        hours: "24/7"
      },
      {
        name: "Women Helpline TN",
        number: "1091",
        location: "Chennai",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "103",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Government General Hospital Chennai",
        number: "044-25305000",
        location: "Chennai",
        hours: "24/7"
      },
      {
        name: "Apollo Hospital Emergency",
        number: "044-28290200",
        location: "Chennai",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Tamil Nadu",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "chennai": {
        police: [
          {
            name: "Central Police Station",
            number: "044-25634888",
            location: "Chennai Central",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "MIOT Hospital",
            number: "044-22492288",
            location: "Manapakkam",
            hours: "24/7"
          }
        ]
      },
      "coimbatore": {
        police: [
          {
            name: "Coimbatore City Police",
            number: "0422-2301000",
            location: "Coimbatore",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // West Bengal
  "west-bengal": {
    police: [
      {
        name: "West Bengal Police Emergency",
        number: "100",
        location: "Kolkata",
        hours: "24/7"
      },
      {
        name: "Women Helpline WB",
        number: "1091",
        location: "Kolkata",
        hours: "24/7"
      },
      {
        name: "Traffic Police",
        number: "1073",
        location: "Kolkata",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "SSKM Hospital Emergency",
        number: "033-22235181",
        location: "Kolkata",
        hours: "24/7"
      },
      {
        name: "Calcutta Medical College",
        number: "033-22303000",
        location: "Kolkata",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "102",
        location: "Across West Bengal",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "kolkata": {
        police: [
          {
            name: "Lalbazar Police Headquarters",
            number: "033-22143230",
            location: "Kolkata",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "AMRI Hospital",
            number: "033-66800000",
            location: "Salt Lake",
            hours: "24/7"
          }
        ]
      },
      "darjeeling": {
        police: [
          {
            name: "Darjeeling Police Station",
            number: "0354-2254330",
            location: "Darjeeling",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Karnataka
  karnataka: {
    police: [
      {
        name: "Karnataka Police Emergency",
        number: "100",
        location: "Bangalore",
        hours: "24/7"
      },
      {
        name: "Women Helpline KA",
        number: "1091",
        location: "Bangalore",
        hours: "24/7"
      },
      {
        name: "Traffic Police",
        number: "103",
        location: "Bangalore",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Victoria Hospital Emergency",
        number: "080-26701110",
        location: "Bangalore",
        hours: "24/7"
      },
      {
        name: "Manipal Hospital",
        number: "080-25024444",
        location: "Bangalore",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Karnataka",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "bangalore-urban": {
        police: [
          {
            name: "Cubbon Park Police Station",
            number: "080-22212121",
            location: "Bangalore",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Narayana Hrudayalaya",
            number: "080-22277112",
            location: "Hosur Road",
            hours: "24/7"
          }
        ]
      },
      "mysore": {
        police: [
          {
            name: "Mysore City Police",
            number: "0821-2414141",
            location: "Mysore",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Kerala
  kerala: {
    police: [
      {
        name: "Kerala Police Emergency",
        number: "100",
        location: "Thiruvananthapuram",
        hours: "24/7"
      },
      {
        name: "Women Helpline KL",
        number: "1091",
        location: "Thiruvananthapuram",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "9846100100",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Medical College Hospital TVM",
        number: "0471-2444250",
        location: "Thiruvananthapuram",
        hours: "24/7"
      },
      {
        name: "Amrita Hospital",
        number: "0484-2851234",
        location: "Kochi",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Kerala",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "thiruvananthapuram": {
        police: [
          {
            name: "Fort Police Station",
            number: "0471-2476411",
            location: "Thiruvananthapuram",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "SUT Hospital",
            number: "0471-2444272",
            location: "Thiruvananthapuram",
            hours: "24/7"
          }
        ]
      },
      "ernakulam": {
        police: [
          {
            name: "Ernakulam Central Police",
            number: "0484-2395400",
            location: "Kochi",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Andhra Pradesh
  "andhra-pradesh": {
    police: [
      {
        name: "AP Police Emergency",
        number: "100",
        location: "Amaravati",
        hours: "24/7"
      },
      {
        name: "Women Helpline AP",
        number: "1091",
        location: "Amaravati",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "103",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "King George Hospital",
        number: "0891-2567890",
        location: "Visakhapatnam",
        hours: "24/7"
      },
      {
        name: "Apollo Hospital Vizag",
        number: "0891-2727272",
        location: "Visakhapatnam",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Andhra Pradesh",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "visakhapatnam": {
        police: [
          {
            name: "Visakhapatnam City Police",
            number: "0891-2563444",
            location: "Visakhapatnam",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Care Hospital",
            number: "0891-3044444",
            location: "Visakhapatnam",
            hours: "24/7"
          }
        ]
      },
      "vijayawada": {
        police: [
          {
            name: "Vijayawada City Police",
            number: "0866-2577777",
            location: "Vijayawada",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Telangana
  telangana: {
    police: [
      {
        name: "Telangana Police Emergency",
        number: "100",
        location: "Hyderabad",
        hours: "24/7"
      },
      {
        name: "Women Helpline TS",
        number: "1091",
        location: "Hyderabad",
        hours: "24/7"
      },
      {
        name: "Traffic Police",
        number: "103",
        location: "Hyderabad",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Osmania General Hospital",
        number: "040-24600122",
        location: "Hyderabad",
        hours: "24/7"
      },
      {
        name: "Yashoda Hospital",
        number: "040-24555555",
        location: "Secunderabad",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Telangana",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "hyderabad": {
        police: [
          {
            name: "Banjara Hills Police Station",
            number: "040-23552000",
            location: "Hyderabad",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Apollo Hospital Hyderabad",
            number: "040-23234444",
            location: "Jubilee Hills",
            hours: "24/7"
          }
        ]
      },
      "warangal": {
        police: [
          {
            name: "Warangal City Police",
            number: "0870-2577777",
            location: "Warangal",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Gujarat
  gujarat: {
    police: [
      {
        name: "Gujarat Police Emergency",
        number: "100",
        location: "Gandhinagar",
        hours: "24/7"
      },
      {
        name: "Women Helpline GJ",
        number: "1091",
        location: "Gandhinagar",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "108",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Civil Hospital Ahmedabad",
        number: "079-22680000",
        location: "Ahmedabad",
        hours: "24/7"
      },
      {
        name: "Sterling Hospital",
        number: "079-26467500",
        location: "Ahmedabad",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Gujarat",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "ahmedabad": {
        police: [
          {
            name: "Ahmedabad City Police",
            number: "079-25351919",
            location: "Ahmedabad",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Zydus Hospital",
            number: "079-66701800",
            location: "Ahmedabad",
            hours: "24/7"
          }
        ]
      },
      "surat": {
        police: [
          {
            name: "Surat City Police",
            number: "0261-2470100",
            location: "Surat",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Rajasthan
  rajasthan: {
    police: [
      {
        name: "Rajasthan Police Emergency",
        number: "100",
        location: "Jaipur",
        hours: "24/7"
      },
      {
        name: "Women Helpline RJ",
        number: "1090",
        location: "Jaipur",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "103",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "SMS Hospital Emergency",
        number: "0141-2560291",
        location: "Jaipur",
        hours: "24/7"
      },
      {
        name: "Fortis Hospital",
        number: "0141-2547000",
        location: "Jaipur",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Rajasthan",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "jaipur": {
        police: [
          {
            name: "Jaipur City Police",
            number: "0141-2610100",
            location: "Jaipur",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Manipal Hospital",
            number: "0141-5169999",
            location: "Jaipur",
            hours: "24/7"
          }
        ]
      },
      "udaipur": {
        police: [
          {
            name: "Udaipur City Police",
            number: "0294-2414100",
            location: "Udaipur",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Punjab
  punjab: {
    police: [
      {
        name: "Punjab Police Emergency",
        number: "100",
        location: "Chandigarh",
        hours: "24/7"
      },
      {
        name: "Women Helpline PB",
        number: "1091",
        location: "Chandigarh",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1073",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "PGI Chandigarh Emergency",
        number: "0172-2756565",
        location: "Chandigarh",
        hours: "24/7"
      },
      {
        name: "Fortis Hospital Mohali",
        number: "0172-4692222",
        location: "Mohali",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Punjab",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "amritsar": {
        police: [
          {
            name: "Amritsar City Police",
            number: "0183-2224412",
            location: "Amritsar",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Amritsar Medical College",
            number: "0183-2420320",
            location: "Amritsar",
            hours: "24/7"
          }
        ]
      },
      "ludhiana": {
        police: [
          {
            name: "Ludhiana City Police",
            number: "0161-2404900",
            location: "Ludhiana",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Haryana
  haryana: {
    police: [
      {
        name: "Haryana Police Emergency",
        number: "100",
        location: "Chandigarh",
        hours: "24/7"
      },
      {
        name: "Women Helpline HR",
        number: "1091",
        location: "Chandigarh",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1073",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "PGI Rohtak Emergency",
        number: "01262-211400",
        location: "Rohtak",
        hours: "24/7"
      },
      {
        name: "Medanta Hospital",
        number: "0124-4141414",
        location: "Gurgaon",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Haryana",
        hours: "24/7"
      }
    ],
    womenHelpline: "1091",
    childHelpline: "1098",
    districts: {
      "gurgaon": {
        police: [
          {
            name: "Gurgaon City Police",
            number: "0124-2321000",
            location: "Gurgaon",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Artemis Hospital",
            number: "0124-6767999",
            location: "Gurgaon",
            hours: "24/7"
          }
        ]
      },
      "faridabad": {
        police: [
          {
            name: "Faridabad City Police",
            number: "0129-2411900",
            location: "Faridabad",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Uttar Pradesh
  "uttar-pradesh": {
    police: [
      {
        name: "UP Police Emergency",
        number: "100",
        location: "Lucknow",
        hours: "24/7"
      },
      {
        name: "Women Helpline UP",
        number: "1090",
        location: "Lucknow",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1073",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "SGPGI Lucknow Emergency",
        number: "0522-2495000",
        location: "Lucknow",
        hours: "24/7"
      },
      {
        name: "Fortis Hospital Noida",
        number: "0120-4122222",
        location: "Noida",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Uttar Pradesh",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "lucknow": {
        police: [
          {
            name: "Lucknow City Police",
            number: "0522-2208550",
            location: "Lucknow",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "King George Medical College",
            number: "0522-2257450",
            location: "Lucknow",
            hours: "24/7"
          }
        ]
      },
      "noida": {
        police: [
          {
            name: "Noida City Police",
            number: "0120-2535020",
            location: "Noida",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Bihar
  bihar: {
    police: [
      {
        name: "Bihar Police Emergency",
        number: "100",
        location: "Patna",
        hours: "24/7"
      },
      {
        name: "Women Helpline BR",
        number: "1090",
        location: "Patna",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "103",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "PMCH Patna Emergency",
        number: "0612-2545401",
        location: "Patna",
        hours: "24/7"
      },
      {
        name: "Ruban Hospital",
        number: "0612-2533333",
        location: "Patna",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Bihar",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "patna": {
        police: [
          {
            name: "Patna City Police",
            number: "0612-2215000",
            location: "Patna",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "AIIMS Patna",
            number: "0612-2461000",
            location: "Patna",
            hours: "24/7"
          }
        ]
      },
      "gaya": {
        police: [
          {
            name: "Gaya City Police",
            number: "0631-2220100",
            location: "Gaya",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Odisha
  odisha: {
    police: [
      {
        name: "Odisha Police Emergency",
        number: "100",
        location: "Bhubaneswar",
        hours: "24/7"
      },
      {
        name: "Women Helpline OD",
        number: "1090",
        location: "Bhubaneswar",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "SCB Medical College Emergency",
        number: "0674-2414111",
        location: "Cuttack",
        hours: "24/7"
      },
      {
        name: "AMRI Hospital Bhubaneswar",
        number: "0674-6666666",
        location: "Bhubaneswar",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Odisha",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "bhubaneswar": {
        police: [
          {
            name: "Bhubaneswar City Police",
            number: "0674-2530100",
            location: "Bhubaneswar",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "KIMS Hospital",
            number: "0674-2725111",
            location: "Bhubaneswar",
            hours: "24/7"
          }
        ]
      },
      "puri": {
        police: [
          {
            name: "Puri City Police",
            number: "06752-222010",
            location: "Puri",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Madhya Pradesh
  "madhyapradesh": {
    police: [
      {
        name: "MP Police Emergency",
        number: "100",
        location: "Bhopal",
        hours: "24/7"
      },
      {
        name: "Women Helpline MP",
        number: "1090",
        location: "Bhopal",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Hamidia Hospital Emergency",
        number: "0755-2660000",
        location: "Bhopal",
        hours: "24/7"
      },
      {
        name: "CHL Hospital",
        number: "0755-4001234",
        location: "Indore",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Madhya Pradesh",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "bhopal": {
        police: [
          {
            name: "Bhopal City Police",
            number: "0755-2444100",
            location: "Bhopal",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Bhopal Memorial Hospital",
            number: "0755-2740000",
            location: "Bhopal",
            hours: "24/7"
          }
        ]
      },
      "indore": {
        police: [
          {
            name: "Indore City Police",
            number: "0731-2444100",
            location: "Indore",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Jharkhand
  jharkhand: {
    police: [
      {
        name: "Jharkhand Police Emergency",
        number: "100",
        location: "Ranchi",
        hours: "24/7"
      },
      {
        name: "Women Helpline JH",
        number: "1090",
        location: "Ranchi",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "RIMS Ranchi Emergency",
        number: "0651-2540000",
        location: "Ranchi",
        hours: "24/7"
      },
      {
        name: "Medanta Hospital Ranchi",
        number: "0651-6600000",
        location: "Ranchi",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Jharkhand",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "ranchi": {
        police: [
          {
            name: "Ranchi City Police",
            number: "0651-2200100",
            location: "Ranchi",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Rajendra Institute of Medical Sciences",
            number: "0651-2540000",
            location: "Ranchi",
            hours: "24/7"
          }
        ]
      },
      "jamshedpur": {
        police: [
          {
            name: "Jamshedpur City Police",
            number: "0657-2440100",
            location: "Jamshedpur",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Assam
  assam: {
    police: [
      {
        name: "Assam Police Emergency",
        number: "100",
        location: "Guwahati",
        hours: "24/7"
      },
      {
        name: "Women Helpline AS",
        number: "1090",
        location: "Guwahati",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "GMCH Guwahati Emergency",
        number: "0361-2520000",
        location: "Guwahati",
        hours: "24/7"
      },
      {
        name: "Nemcare Hospital",
        number: "0361-7101000",
        location: "Guwahati",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Assam",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "guwahati": {
        police: [
          {
            name: "Guwahati City Police",
            number: "0361-2540100",
            location: "Guwahati",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Down Town Hospital",
            number: "0361-2330000",
            location: "Guwahati",
            hours: "24/7"
          }
        ]
      },
      "dibrugarh": {
        police: [
          {
            name: "Dibrugarh City Police",
            number: "0373-2320100",
            location: "Dibrugarh",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Chhattisgarh
  chhattisgarh: {
    police: [
      {
        name: "Chhattisgarh Police Emergency",
        number: "100",
        location: "Raipur",
        hours: "24/7"
      },
      {
        name: "Women Helpline CG",
        number: "1090",
        location: "Raipur",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "AIIMS Raipur Emergency",
        number: "0771-2570000",
        location: "Raipur",
        hours: "24/7"
      },
      {
        name: "Fortis Hospital Raipur",
        number: "0771-3003300",
        location: "Raipur",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Chhattisgarh",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "raipur": {
        police: [
          {
            name: "Raipur City Police",
            number: "0771-2440100",
            location: "Raipur",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Dr. B.R. Ambedkar Hospital",
            number: "0771-2570000",
            location: "Raipur",
            hours: "24/7"
          }
        ]
      },
      "bilaspur": {
        police: [
          {
            name: "Bilaspur City Police",
            number: "07752-244100",
            location: "Bilaspur",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Uttarakhand
  uttarakhand: {
    police: [
      {
        name: "Uttarakhand Police Emergency",
        number: "100",
        location: "Dehradun",
        hours: "24/7"
      },
      {
        name: "Women Helpline UK",
        number: "1090",
        location: "Dehradun",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "Doon Hospital Emergency",
        number: "0135-2658970",
        location: "Dehradun",
        hours: "24/7"
      },
      {
        name: "Max Hospital Dehradun",
        number: "0135-2550000",
        location: "Dehradun",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Uttarakhand",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "dehradun": {
        police: [
          {
            name: "Dehradun City Police",
            number: "0135-2650100",
            location: "Dehradun",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Himalayan Hospital",
            number: "0135-2461000",
            location: "Dehradun",
            hours: "24/7"
          }
        ]
      },
      "nainital": {
        police: [
          {
            name: "Nainital City Police",
            number: "05942-235100",
            location: "Nainital",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Himachal Pradesh
  "himachal-pradesh": {
    police: [
      {
        name: "HP Police Emergency",
        number: "100",
        location: "Shimla",
        hours: "24/7"
      },
      {
        name: "Women Helpline HP",
        number: "1090",
        location: "Shimla",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "IGMC Shimla Emergency",
        number: "0177-2804251",
        location: "Shimla",
        hours: "24/7"
      },
      {
        name: "Fortis Hospital Mohali",
        number: "0172-4692222",
        location: "Mohali",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Himachal Pradesh",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "shimla": {
        police: [
          {
            name: "Shimla City Police",
            number: "0177-2801100",
            location: "Shimla",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Kamla Nehru Hospital",
            number: "0177-2653000",
            location: "Shimla",
            hours: "24/7"
          }
        ]
      },
      "manali": {
        police: [
          {
            name: "Manali Police Station",
            number: "01902-252100",
            location: "Manali",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Jammu and Kashmir
  "jammu-kashmir": {
    police: [
      {
        name: "J&K Police Emergency",
        number: "100",
        location: "Srinagar/Jammu",
        hours: "24/7"
      },
      {
        name: "Women Helpline JK",
        number: "1090",
        location: "Srinagar/Jammu",
        hours: "24/7"
      },
      {
        name: "Highway Patrol",
        number: "1095",
        location: "State Highways",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "SMHS Hospital Emergency",
        number: "0194-2452027",
        location: "Srinagar",
        hours: "24/7"
      },
      {
        name: "GMC Jammu Emergency",
        number: "0191-2546633",
        location: "Jammu",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across J&K",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "srinagar": {
        police: [
          {
            name: "Srinagar City Police",
            number: "0194-2450100",
            location: "Srinagar",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "SKIMS Hospital",
            number: "0194-2401013",
            location: "Srinagar",
            hours: "24/7"
          }
        ]
      },
      "jammu": {
        police: [
          {
            name: "Jammu City Police",
            number: "0191-2540100",
            location: "Jammu",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Goa
  goa: {
    police: [
      {
        name: "Goa Police Emergency",
        number: "100",
        location: "Panaji",
        hours: "24/7"
      },
      {
        name: "Women Helpline GA",
        number: "1090",
        location: "Panaji",
        hours: "24/7"
      },
      {
        name: "Tourist Police",
        number: "0832-2424000",
        location: "Goa",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "GMC Hospital Emergency",
        number: "0832-2458700",
        location: "Bambolim",
        hours: "24/7"
      },
      {
        name: "Manipal Hospital Goa",
        number: "0832-2444444",
        location: "Panaji",
        hours: "24/7"
      },
      {
        name: "State Ambulance",
        number: "108",
        location: "Across Goa",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098",
    districts: {
      "north-goa": {
        police: [
          {
            name: "Panaji Police Station",
            number: "0832-2424000",
            location: "Panaji",
            hours: "24/7"
          }
        ],
        medical: [
          {
            name: "Asilo Hospital",
            number: "0832-2262100",
            location: "Mapusa",
            hours: "24/7"
          }
        ]
      },
      "south-goa": {
        police: [
          {
            name: "Margao Police Station",
            number: "0832-2710100",
            location: "Margao",
            hours: "24/7"
          }
        ]
      }
    }
  },

  // Northeastern States (grouped for brevity)
  "northeast": {
    police: [
      {
        name: "State Police Emergency",
        number: "100",
        location: "State Capital",
        hours: "24/7"
      },
      {
        name: "Women Helpline",
        number: "1090",
        location: "State Capital",
        hours: "24/7"
      }
    ],
    medical: [
      {
        name: "State Medical College",
        number: "108",
        location: "State Capital",
        hours: "24/7"
      },
      {
        name: "Emergency Ambulance",
        number: "102",
        location: "Across State",
        hours: "24/7"
      }
    ],
    womenHelpline: "1090",
    childHelpline: "1098"
  }
};