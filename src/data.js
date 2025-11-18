const videoFilters = {
    // Sort options
    sortBy: [
      "Relevance",
      "Upload date",
      "View count",
      "Rating"
    ],
  
    // Upload date filters
    uploadDate: [
      "Last hour",
      "Today",
      "This week",
      "This month",
      "This year"
    ],
  
    // Duration filters
    duration: [
      "Under 4 minutes",
      "4-20 minutes",
      "Over 20 minutes"
    ],
  
    // Features filters
    features: [
      "Live",
      "4K",
      "HD",
      "Subtitles/CC",
      "Creative Commons",
      "360°",
      "VR180",
      "3D",
      "HDR",
      "Location"
    ],
  
    // Type filters
    type: [
     
      "Video",
      "Channel",
      "Playlist",
      "Movie"
    ],
  
    // Category filters (like YouTube's browse categories)
    category: [
      "Music",
      "Sports",
      "Gaming",
      "Movies & Shows",
      "News",
      "Live",
      "Learning",
      "Fashion & Beauty",
      "Podcasts",
      "Comedy",
      "Auto & Vehicles",
      "Technology",
      "Science & Tech",
      "Cooking & Recipes",
      "Art & Design",
      "Travel & Events",
      "How-to & DIY"
    ]
  };
  
  // Sample video data
  const videos = [
    {
      id: 1,
      title: "How to Learn JavaScript in 2024",
      channel: "WebDev Masters",
      views: "150K",
      uploadDate: "2 days ago",
      duration: "15:30",
      isLive: false,
      is4K: true,
      hasSubtitles: true,
      category: "Learning",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"


    },
    {
      id: 2,
      title: "Morning Yoga Flow - 30 Minute Session",
      channel: "Yoga with Sarah",
      views: "2.1M",
      uploadDate: "3 weeks ago",
      duration: "28:45",
      isLive: false,
      is4K: false,
      hasSubtitles: true,
      category: "How-to & DIY",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 3,
      title: "LIVE: SpaceX Rocket Launch",
      channel: "Space Today",
      views: "45K",
      uploadDate: "1 hour ago",
      duration: "2:15:22",
      isLive: true,
      is4K: true,
      hasSubtitles: false,
      category: "Science & Tech",
      type: "Live",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 4,
      title: "Gaming Highlights - Epic Moments #253",
      channel: "ProGamer",
      views: "890K",
      uploadDate: "5 days ago",
      duration: "8:12",
      isLive: false,
      is4K: true,
      hasSubtitles: false,
      category: "Gaming",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 5,
      title: "5 Minute Chocolate Cake Recipe",
      channel: "Quick Recipes",
      views: "3.4M",
      uploadDate: "1 month ago",
      duration: "4:33",
      isLive: false,
      is4K: false,
      hasSubtitles: true,
      category: "Cooking & Recipes",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 6,
      title: "Tokyo Travel Vlog 2024 - 4K Walking Tour",
      channel: "Travel Adventures",
      views: "520K",
      uploadDate: "2 weeks ago",
      duration: "45:18",
      isLive: false,
      is4K: true,
      hasSubtitles: true,
      category: "Travel & Events",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 7,
      title: "Breaking News: Global Summit Update",
      channel: "World News Network",
      views: "1.2M",
      uploadDate: "5 hours ago",
      duration: "12:45",
      isLive: false,
      is4K: false,
      hasSubtitles: true,
      category: "News",
      type: "Video",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"

    },
    {
      id: 8,
      title: "Best of Classical Music - Relaxing Piano",
      channel: "Music Therapy",
      views: "8.7M",
      uploadDate: "6 months ago",
      duration: "1:32:15",
      isLive: false,
      is4K: true,
      hasSubtitles: false,
      category: "Music",
      type: "Playlist",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"
    },
    {
      id: 9,
      title: "Spiderman - What a dileima and headache",
      channel: "Brainstomer",
      views: "8.7M",
      uploadDate: "6 months ago",
      duration: "1:32:15",
      isLive: false,
      is4K: true,
      hasSubtitles: false,
      category: "Music",
      type: "Playlist",
      poster: "src/assets/poster.jpg",
      logo: "src/assets/logo.jpg"
    }
  ];
  
  // Additional filter options
  const advancedFilters = {
    // For search results filtering
    resultType: [
      "Video",
      "Channel",
      "Playlist",
      "Movie"
    ],
  
    // For time-based filtering
    timeRange: [
      "Last hour",
      "Last 24 hours",
      "Last week",
      "Last month",
      "Last year"
    ],
  
    // For quality filtering
    quality: [
      "360p",
      "480p",
      "720p",
      "1080p",
      "1440p",
      "4K",
      "8K"
    ],
  
    // For licensing
    license: [
      "YouTube Standard",
      "Creative Commons"
    ],
  
    // Safe search
    safeSearch: [
      "Strict",
      "Moderate",
      "None"
    ]
  };
  
  // Usage example in a filter component
  const currentFilters = {
    sortBy: "Upload date",
    uploadDate: "This week",
    duration: "4-20 minutes",
    features: ["4K", "Subtitles/CC"],
    category: "Learning",
    type: "Video"

  };
  
  export { videoFilters, videos, advancedFilters, currentFilters };