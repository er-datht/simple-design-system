import figma from "@figma/code-connect";
import {
  IconActivity,
  IconAirplay,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconAlignCenter,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight,
  IconAnchor,
  IconAperture,
  IconArchive,
  IconArrowDown,
  IconArrowDownCircle,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowLeftCircle,
  IconArrowRight,
  IconArrowRightCircle,
  IconArrowUp,
  IconArrowUpCircle,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconAtSign,
  IconAward,
  IconBarChart,
  IconBarChart2,
  IconBattery,
  IconBatteryCharging,
  IconBell,
  IconBellOff,
  IconBluetooth,
  IconBold,
  IconBook,
  IconBookOpen,
  IconBookmark,
  IconBox,
  IconBriefcase,
  IconCalendar,
  IconCamera,
  IconCameraOff,
  IconCast,
  IconCheck,
  IconCheckCircle,
  IconCheckSquare,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronsDown,
  IconChevronsLeft,
  IconChevronsRight,
  IconChevronsUp,
  IconChrome,
  IconCircle,
  IconClipboard,
  IconClock,
  IconCloud,
  IconCloudDrizzle,
  IconCloudLightning,
  IconCloudOff,
  IconCloudRain,
  IconCloudSnow,
  IconCode,
  IconCodepen,
  IconCodesandbox,
  IconCoffee,
  IconColumns,
  IconCommand,
  IconCompass,
  IconCopy,
  IconCornerDownLeft,
  IconCornerDownRight,
  IconCornerLeftDown,
  IconCornerLeftUp,
  IconCornerRightDown,
  IconCornerRightUp,
  IconCornerUpLeft,
  IconCornerUpRight,
  IconCpu,
  IconCreditCard,
  IconCrop,
  IconCrosshair,
  IconDatabase,
  IconDelete,
  IconDisc,
  IconDivide,
  IconDivideCircle,
  IconDivideSquare,
  IconDollarSign,
  IconDownload,
  IconDownloadCloud,
  IconDribbble,
  IconDroplet,
  IconEdit,
  IconEdit2,
  IconEdit3,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFacebook,
  IconFastForward,
  IconFeather,
  IconFigma,
  IconFile,
  IconFileMinus,
  IconFilePlus,
  IconFileText,
  IconFilm,
  IconFilter,
  IconFlag,
  IconFolder,
  IconFolderMinus,
  IconFolderPlus,
  IconFramer,
  IconFrown,
  IconGift,
  IconGitBranch,
  IconGitCommit,
  IconGitMerge,
  IconGitPullRequest,
  IconGithub,
  IconGitlab,
  IconGlobe,
  IconGrid,
  IconHardDrive,
  IconHash,
  IconHeadphones,
  IconHeart,
  IconHelpCircle,
  IconHexagon,
  IconHome,
  IconImage,
  IconInbox,
  IconInfo,
  IconInstagram,
  IconItalic,
  IconKey,
  IconLayers,
  IconLayout,
  IconLifeBuoy,
  IconLink,
  IconLink2,
  IconLinkedin,
  IconList,
  IconLoader,
  IconLock,
  IconLogIn,
  IconLogOut,
  IconMail,
  IconMap,
  IconMapPin,
  IconMaximize,
  IconMaximize2,
  IconMeh,
  IconMenu,
  IconMessageCircle,
  IconMessageSquare,
  IconMic,
  IconMicOff,
  IconMinimize,
  IconMinimize2,
  IconMinus,
  IconMinusCircle,
  IconMinusSquare,
  IconMonitor,
  IconMoon,
  IconMoreHorizontal,
  IconMoreVertical,
  IconMousePointer,
  IconMove,
  IconMusic,
  IconNavigation,
  IconNavigation2,
  IconOctagon,
  IconPackage,
  IconPaperclip,
  IconPause,
  IconPauseCircle,
  IconPenTool,
  IconPercent,
  IconPhone,
  IconPhoneCall,
  IconPhoneForwarded,
  IconPhoneIncoming,
  IconPhoneMissed,
  IconPhoneOff,
  IconPhoneOutgoing,
  IconPieChart,
  IconPlay,
  IconPlayCircle,
  IconPlus,
  IconPlusCircle,
  IconPlusSquare,
  IconPocket,
  IconPower,
  IconPrinter,
  IconRadio,
  IconRefreshCcw,
  IconRefreshCw,
  IconRepeat,
  IconRewind,
  IconRotateCcw,
  IconRotateCw,
  IconRss,
  IconSave,
  IconScissors,
  IconSearch,
  IconSend,
  IconServer,
  IconSettings,
  IconShare,
  IconShare2,
  IconShield,
  IconShieldOff,
  IconShoppingBag,
  IconShoppingCart,
  IconShuffle,
  IconSidebar,
  IconSkipBack,
  IconSkipForward,
  IconSlack,
  IconSlash,
  IconSliders,
  IconSmartphone,
  IconSmile,
  IconSpeaker,
  IconSquare,
  IconStar,
  IconStopCircle,
  IconSun,
  IconSunrise,
  IconSunset,
  IconTable,
  IconTablet,
  IconTag,
  IconTarget,
  IconTerminal,
  IconThermometer,
  IconThumbsDown,
  IconThumbsUp,
  IconToggleLeft,
  IconToggleRight,
  IconTool,
  IconTrash,
  IconTrash2,
  IconTrello,
  IconTrendingDown,
  IconTrendingUp,
  IconTriangle,
  IconTruck,
  IconTv,
  IconTwitch,
  IconTwitter,
  IconType,
  IconUmbrella,
  IconUnderline,
  IconUnlock,
  IconUpload,
  IconUploadCloud,
  IconUser,
  IconUserCheck,
  IconUserMinus,
  IconUserPlus,
  IconUserX,
  IconUsers,
  IconVideo,
  IconVideoOff,
  IconVoicemail,
  IconVolume,
  IconVolume1,
  IconVolume2,
  IconVolumeX,
  IconWatch,
  IconWifi,
  IconWifiOff,
  IconWind,
  IconX,
  IconXCircle,
  IconXOctagon,
  IconXSquare,
  IconYoutube,
  IconZap,
  IconZapOff,
  IconZoomIn,
  IconZoomOut,
} from "../../ui/icons";
figma.connect(
  IconArrowUpRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13041",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowUpRight size={size} />,
  }
);
figma.connect(
  IconArrowDownLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13030",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowDownLeft size={size} />,
  }
);
figma.connect(
  IconBarChart,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13044",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBarChart size={size} />,
  }
);
figma.connect(
  IconArrowUpLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13039",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowUpLeft size={size} />,
  }
);
figma.connect(
  IconAlignLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13024",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlignLeft size={size} />,
  }
);
figma.connect(
  IconAnchor,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13027",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAnchor size={size} />,
  }
);
figma.connect(
  IconAlertOctagon,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13021",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlertOctagon size={size} />,
  }
);
figma.connect(
  IconArchive,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13028",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArchive size={size} />,
  }
);
figma.connect(
  IconBattery,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13047",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBattery size={size} />,
  }
);
figma.connect(
  IconArrowLeftCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13035",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowLeftCircle size={size} />,
  }
);
figma.connect(
  IconArrowDownCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13031",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowDownCircle size={size} />,
  }
);
figma.connect(
  IconCast,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13061",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCast size={size} />,
  }
);
figma.connect(
  IconBellOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13049",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBellOff size={size} />,
  }
);
figma.connect(
  IconBarChart2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13045",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBarChart2 size={size} />,
  }
);
figma.connect(
  IconAlignJustify,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13025",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlignJustify size={size} />,
  }
);
figma.connect(
  IconBookOpen,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13053",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBookOpen size={size} />,
  }
);
figma.connect(
  IconBook,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13052",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBook size={size} />,
  }
);
figma.connect(
  IconCheck,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13063",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCheck size={size} />,
  }
);
figma.connect(
  IconCheckCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13060",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCheckCircle size={size} />,
  }
);
figma.connect(
  IconCornerDownRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13466",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerDownRight size={size} />,
  }
);
figma.connect(
  IconAperture,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13029",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAperture size={size} />,
  }
);
figma.connect(
  IconArrowRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13036",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowRight size={size} />,
  }
);
figma.connect(
  IconCopy,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13464",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCopy size={size} />,
  }
);
figma.connect(
  IconCodesandbox,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13184",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCodesandbox size={size} />,
  }
);
figma.connect(
  IconCornerDownLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13467",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerDownLeft size={size} />,
  }
);
figma.connect(
  IconCalendar,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13056",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCalendar size={size} />,
  }
);
figma.connect(
  IconBatteryCharging,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13046",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBatteryCharging size={size} />,
  }
);
figma.connect(
  IconAlertCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13020",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlertCircle size={size} />,
  }
);
figma.connect(
  IconCornerRightDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13471",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerRightDown size={size} />,
  }
);
figma.connect(
  IconBookmark,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13055",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBookmark size={size} />,
  }
);
figma.connect(
  IconChevronLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13064",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronLeft size={size} />,
  }
);
figma.connect(
  IconBluetooth,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13051",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBluetooth size={size} />,
  }
);
figma.connect(
  IconChevronUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13166",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronUp size={size} />,
  }
);
figma.connect(
  IconCloud,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13179",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloud size={size} />,
  }
);
figma.connect(
  IconCloudLightning,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13175",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloudLightning size={size} />,
  }
);
figma.connect(
  IconChevronDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13072",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronDown size={size} />,
  }
);
figma.connect(
  IconCheckSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13062",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCheckSquare size={size} />,
  }
);
figma.connect(
  IconArrowDownRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13033",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowDownRight size={size} />,
  }
);
figma.connect(
  IconArrowDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13032",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowDown size={size} />,
  }
);
figma.connect(
  IconCrop,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13477",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCrop size={size} />,
  }
);
figma.connect(
  IconAlignRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13026",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlignRight size={size} />,
  }
);
figma.connect(
  IconChrome,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13172",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChrome size={size} />,
  }
);
figma.connect(
  IconAlertTriangle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13022",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlertTriangle size={size} />,
  }
);
figma.connect(
  IconDelete,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13479",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDelete size={size} />,
  }
);
figma.connect(
  IconArrowLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13034",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowLeft size={size} />,
  }
);
figma.connect(
  IconActivity,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13018",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconActivity size={size} />,
  }
);
figma.connect(
  IconCornerLeftDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13469",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerLeftDown size={size} />,
  }
);
figma.connect(
  IconDownload,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13487",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDownload size={size} />,
  }
);
figma.connect(
  IconAtSign,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13043",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAtSign size={size} />,
  }
);
figma.connect(
  IconDivideCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13481",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDivideCircle size={size} />,
  }
);
figma.connect(
  IconAward,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13042",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAward size={size} />,
  }
);
figma.connect(
  IconChevronRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13165",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronRight size={size} />,
  }
);
figma.connect(
  IconArrowRightCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13037",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowRightCircle size={size} />,
  }
);
figma.connect(
  IconBold,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13050",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBold size={size} />,
  }
);
figma.connect(
  IconAlignCenter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13023",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAlignCenter size={size} />,
  }
);
figma.connect(
  IconArrowUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13040",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowUp size={size} />,
  }
);
figma.connect(
  IconBriefcase,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13057",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBriefcase size={size} />,
  }
);
figma.connect(
  IconAirplay,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13019",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconAirplay size={size} />,
  }
);
figma.connect(
  IconDivideSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13483",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDivideSquare size={size} />,
  }
);
figma.connect(
  IconCornerLeftUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13468",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerLeftUp size={size} />,
  }
);
figma.connect(
  IconCornerUpRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13472",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerUpRight size={size} />,
  }
);
figma.connect(
  IconFacebook,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13494",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFacebook size={size} />,
  }
);
figma.connect(
  IconCloudOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13178",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloudOff size={size} />,
  }
);
figma.connect(
  IconCornerRightUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13470",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerRightUp size={size} />,
  }
);
figma.connect(
  IconCloudSnow,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13180",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloudSnow size={size} />,
  }
);
figma.connect(
  IconCommand,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13463",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCommand size={size} />,
  }
);
figma.connect(
  IconCamera,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13058",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCamera size={size} />,
  }
);
figma.connect(
  IconCompass,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13465",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCompass size={size} />,
  }
);
figma.connect(
  IconCodepen,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13181",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCodepen size={size} />,
  }
);
figma.connect(
  IconCameraOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13059",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCameraOff size={size} />,
  }
);
figma.connect(
  IconChevronsDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13168",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronsDown size={size} />,
  }
);
figma.connect(
  IconExternalLink,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13493",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconExternalLink size={size} />,
  }
);
figma.connect(
  IconArrowUpCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13038",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconArrowUpCircle size={size} />,
  }
);
figma.connect(
  IconEdit,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13490",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconEdit size={size} />,
  }
);
figma.connect(
  IconCloudDrizzle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13176",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloudDrizzle size={size} />,
  }
);
figma.connect(
  IconCornerUpLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13473",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCornerUpLeft size={size} />,
  }
);
figma.connect(
  IconHexagon,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13525",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHexagon size={size} />,
  }
);
figma.connect(
  IconEdit2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13489",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconEdit2 size={size} />,
  }
);
figma.connect(
  IconDisc,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13480",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDisc size={size} />,
  }
);
figma.connect(
  IconChevronsLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13167",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronsLeft size={size} />,
  }
);
figma.connect(
  IconGitCommit,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13512",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGitCommit size={size} />,
  }
);
figma.connect(
  IconChevronsUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13169",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronsUp size={size} />,
  }
);
figma.connect(
  IconClock,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13173",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconClock size={size} />,
  }
);
figma.connect(
  IconClipboard,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13174",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconClipboard size={size} />,
  }
);
figma.connect(
  IconFastForward,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13497",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFastForward size={size} />,
  }
);
figma.connect(
  IconKey,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13533",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconKey size={size} />,
  }
);
figma.connect(
  IconImage,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13526",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconImage size={size} />,
  }
);
figma.connect(
  IconCloudRain,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13177",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCloudRain size={size} />,
  }
);
figma.connect(
  IconMenu,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13551",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMenu size={size} />,
  }
);
figma.connect(
  IconHardDrive,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13520",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHardDrive size={size} />,
  }
);
figma.connect(
  IconFolderPlus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13506",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFolderPlus size={size} />,
  }
);
figma.connect(
  IconDollarSign,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13485",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDollarSign size={size} />,
  }
);
figma.connect(
  IconCoffee,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13183",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCoffee size={size} />,
  }
);
figma.connect(
  IconHelpCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13524",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHelpCircle size={size} />,
  }
);
figma.connect(
  IconFeather,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13496",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFeather size={size} />,
  }
);
figma.connect(
  IconFile,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13503",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFile size={size} />,
  }
);
figma.connect(
  IconLink,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13536",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLink size={size} />,
  }
);
figma.connect(
  IconEyeOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13492",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconEyeOff size={size} />,
  }
);
figma.connect(
  IconCpu,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13475",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCpu size={size} />,
  }
);
figma.connect(
  IconDatabase,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13478",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDatabase size={size} />,
  }
);
figma.connect(
  IconMinusCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13556",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinusCircle size={size} />,
  }
);
figma.connect(
  IconFilm,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13502",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFilm size={size} />,
  }
);
figma.connect(
  IconLogOut,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13543",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLogOut size={size} />,
  }
);
figma.connect(
  IconFrown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13511",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFrown size={size} />,
  }
);
figma.connect(
  IconDivide,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13482",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDivide size={size} />,
  }
);
figma.connect(
  IconChevronsRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13170",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconChevronsRight size={size} />,
  }
);
figma.connect(
  IconBox,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13054",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBox size={size} />,
  }
);
figma.connect(
  IconGithub,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13517",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGithub size={size} />,
  }
);
figma.connect(
  IconHash,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13521",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHash size={size} />,
  }
);
figma.connect(
  IconMessageCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13550",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMessageCircle size={size} />,
  }
);
figma.connect(
  IconColumns,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13185",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconColumns size={size} />,
  }
);
figma.connect(
  IconMapPin,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13545",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMapPin size={size} />,
  }
);
figma.connect(
  IconCode,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13182",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCode size={size} />,
  }
);
figma.connect(
  IconFlag,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13504",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFlag size={size} />,
  }
);
figma.connect(
  IconLogIn,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13542",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLogIn size={size} />,
  }
);
figma.connect(
  IconMicOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13552",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMicOff size={size} />,
  }
);
figma.connect(
  IconLayers,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13532",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLayers size={size} />,
  }
);
figma.connect(
  IconDribbble,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13486",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDribbble size={size} />,
  }
);
figma.connect(
  IconBell,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13048",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconBell size={size} />,
  }
);
figma.connect(
  IconMinus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13558",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinus size={size} />,
  }
);
figma.connect(
  IconCrosshair,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13476",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCrosshair size={size} />,
  }
);
figma.connect(
  IconCreditCard,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13474",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCreditCard size={size} />,
  }
);
figma.connect(
  IconInstagram,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13531",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconInstagram size={size} />,
  }
);
figma.connect(
  IconList,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13538",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconList size={size} />,
  }
);
figma.connect(
  IconMoreHorizontal,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13563",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMoreHorizontal size={size} />,
  }
);
figma.connect(
  IconHeadphones,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13523",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHeadphones size={size} />,
  }
);
figma.connect(
  IconCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4039:13171",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconCircle size={size} />,
  }
);
figma.connect(
  IconFilter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13505",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFilter size={size} />,
  }
);
figma.connect(
  IconMaximize,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13548",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMaximize size={size} />,
  }
);
figma.connect(
  IconGitBranch,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13513",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGitBranch size={size} />,
  }
);
figma.connect(
  IconFigma,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13498",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFigma size={size} />,
  }
);
figma.connect(
  IconLock,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13540",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLock size={size} />,
  }
);
figma.connect(
  IconMinimize2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13554",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinimize2 size={size} />,
  }
);
figma.connect(
  IconPhoneOutgoing,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13581",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneOutgoing size={size} />,
  }
);
figma.connect(
  IconHeart,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13522",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHeart size={size} />,
  }
);
figma.connect(
  IconItalic,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13530",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconItalic size={size} />,
  }
);
figma.connect(
  IconInfo,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13528",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconInfo size={size} />,
  }
);
figma.connect(
  IconPower,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13592",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPower size={size} />,
  }
);
figma.connect(
  IconFileMinus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13499",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFileMinus size={size} />,
  }
);
figma.connect(
  IconGitMerge,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13515",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGitMerge size={size} />,
  }
);
figma.connect(
  IconLink2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13537",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLink2 size={size} />,
  }
);
figma.connect(
  IconMoreVertical,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13562",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMoreVertical size={size} />,
  }
);
figma.connect(
  IconPrinter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13591",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPrinter size={size} />,
  }
);
figma.connect(
  IconFramer,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13508",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFramer size={size} />,
  }
);
figma.connect(
  IconEdit3,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13491",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconEdit3 size={size} />,
  }
);
figma.connect(
  IconMoon,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13560",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMoon size={size} />,
  }
);
figma.connect(
  IconRotateCcw,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13597",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRotateCcw size={size} />,
  }
);
figma.connect(
  IconPhoneCall,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13577",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneCall size={size} />,
  }
);
figma.connect(
  IconSidebar,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13613",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSidebar size={size} />,
  }
);
figma.connect(
  IconPlus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13590",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPlus size={size} />,
  }
);
figma.connect(
  IconShare2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13608",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShare2 size={size} />,
  }
);
figma.connect(
  IconHome,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13527",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconHome size={size} />,
  }
);
figma.connect(
  IconRss,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13599",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRss size={size} />,
  }
);
figma.connect(
  IconPauseCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13574",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPauseCircle size={size} />,
  }
);
figma.connect(
  IconFolderMinus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13507",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFolderMinus size={size} />,
  }
);
figma.connect(
  IconPercent,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13575",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPercent size={size} />,
  }
);
figma.connect(
  IconServer,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13605",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconServer size={size} />,
  }
);
figma.connect(
  IconLoader,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13541",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLoader size={size} />,
  }
);
figma.connect(
  IconEye,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13495",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconEye size={size} />,
  }
);
figma.connect(
  IconGitPullRequest,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13514",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGitPullRequest size={size} />,
  }
);
figma.connect(
  IconFilePlus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13501",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFilePlus size={size} />,
  }
);
figma.connect(
  IconLinkedin,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13539",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLinkedin size={size} />,
  }
);
figma.connect(
  IconPhoneIncoming,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13580",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneIncoming size={size} />,
  }
);
figma.connect(
  IconMap,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13547",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMap size={size} />,
  }
);
figma.connect(
  IconSave,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13601",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSave size={size} />,
  }
);
figma.connect(
  IconPieChart,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13583",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPieChart size={size} />,
  }
);
figma.connect(
  IconLayout,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13535",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLayout size={size} />,
  }
);
figma.connect(
  IconGlobe,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13519",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGlobe size={size} />,
  }
);
figma.connect(
  IconSliders,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13620",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSliders size={size} />,
  }
);
figma.connect(
  IconPause,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13572",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPause size={size} />,
  }
);
figma.connect(
  IconSkipForward,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13615",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSkipForward size={size} />,
  }
);
figma.connect(
  IconDownloadCloud,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13484",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDownloadCloud size={size} />,
  }
);
figma.connect(
  IconGift,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13510",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGift size={size} />,
  }
);
figma.connect(
  IconFolder,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13509",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFolder size={size} />,
  }
);
figma.connect(
  IconGrid,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13518",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGrid size={size} />,
  }
);
figma.connect(
  IconLifeBuoy,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13534",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconLifeBuoy size={size} />,
  }
);
figma.connect(
  IconPlusSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13587",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPlusSquare size={size} />,
  }
);
figma.connect(
  IconGitlab,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13516",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconGitlab size={size} />,
  }
);
figma.connect(
  IconInbox,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13529",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconInbox size={size} />,
  }
);
figma.connect(
  IconRefreshCw,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13595",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRefreshCw size={size} />,
  }
);
figma.connect(
  IconOctagon,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13569",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconOctagon size={size} />,
  }
);
figma.connect(
  IconNavigation2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13566",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconNavigation2 size={size} />,
  }
);
figma.connect(
  IconShare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13607",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShare size={size} />,
  }
);
figma.connect(
  IconShield,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13609",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShield size={size} />,
  }
);
figma.connect(
  IconFileText,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13500",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconFileText size={size} />,
  }
);
figma.connect(
  IconScissors,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13602",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconScissors size={size} />,
  }
);
figma.connect(
  IconSun,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13626",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSun size={size} />,
  }
);
figma.connect(
  IconMove,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13564",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMove size={size} />,
  }
);
figma.connect(
  IconPocket,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13589",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPocket size={size} />,
  }
);
figma.connect(
  IconDroplet,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13488",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconDroplet size={size} />,
  }
);
figma.connect(
  IconSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13624",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSquare size={size} />,
  }
);
figma.connect(
  IconTable,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13630",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTable size={size} />,
  }
);
figma.connect(
  IconMeh,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13549",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMeh size={size} />,
  }
);
figma.connect(
  IconPhone,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13584",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhone size={size} />,
  }
);
figma.connect(
  IconStar,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13623",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconStar size={size} />,
  }
);
figma.connect(
  IconSlash,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13617",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSlash size={size} />,
  }
);
figma.connect(
  IconMail,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13544",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMail size={size} />,
  }
);
figma.connect(
  IconMaximize2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13546",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMaximize2 size={size} />,
  }
);
figma.connect(
  IconThumbsUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13635",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconThumbsUp size={size} />,
  }
);
figma.connect(
  IconPlusCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13588",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPlusCircle size={size} />,
  }
);
figma.connect(
  IconMessageSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13553",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMessageSquare size={size} />,
  }
);
figma.connect(
  IconPlay,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13586",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPlay size={size} />,
  }
);
figma.connect(
  IconMinusSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13559",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinusSquare size={size} />,
  }
);
figma.connect(
  IconPlayCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13585",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPlayCircle size={size} />,
  }
);
figma.connect(
  IconMinimize,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13557",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMinimize size={size} />,
  }
);
figma.connect(
  IconMusic,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13567",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMusic size={size} />,
  }
);
figma.connect(
  IconShoppingCart,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13611",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShoppingCart size={size} />,
  }
);
figma.connect(
  IconVolumeX,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13668",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVolumeX size={size} />,
  }
);
figma.connect(
  IconPenTool,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13576",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPenTool size={size} />,
  }
);
figma.connect(
  IconSend,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13603",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSend size={size} />,
  }
);
figma.connect(
  IconYoutube,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13678",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconYoutube size={size} />,
  }
);
figma.connect(
  IconUnlock,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13654",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUnlock size={size} />,
  }
);
figma.connect(
  IconX,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13675",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconX size={size} />,
  }
);
figma.connect(
  IconRadio,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13594",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRadio size={size} />,
  }
);
figma.connect(
  IconWifi,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13672",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconWifi size={size} />,
  }
);
figma.connect(
  IconTruck,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13645",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTruck size={size} />,
  }
);
figma.connect(
  IconUploadCloud,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13653",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUploadCloud size={size} />,
  }
);
figma.connect(
  IconWind,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13671",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconWind size={size} />,
  }
);
figma.connect(
  IconNavigation,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13568",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconNavigation size={size} />,
  }
);
figma.connect(
  IconPaperclip,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13570",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPaperclip size={size} />,
  }
);
figma.connect(
  IconShieldOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13610",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShieldOff size={size} />,
  }
);
figma.connect(
  IconMonitor,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13561",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMonitor size={size} />,
  }
);
figma.connect(
  IconVoicemail,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13663",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVoicemail size={size} />,
  }
);
figma.connect(
  IconPhoneOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13582",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneOff size={size} />,
  }
);
figma.connect(
  IconUmbrella,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13652",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUmbrella size={size} />,
  }
);
figma.connect(
  IconMic,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13555",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMic size={size} />,
  }
);
figma.connect(
  IconXSquare,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13676",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconXSquare size={size} />,
  }
);
figma.connect(
  IconToggleRight,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13637",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconToggleRight size={size} />,
  }
);
figma.connect(
  IconShoppingBag,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13612",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShoppingBag size={size} />,
  }
);
figma.connect(
  IconTrash2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13639",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTrash2 size={size} />,
  }
);
figma.connect(
  IconUserCheck,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13655",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUserCheck size={size} />,
  }
);
figma.connect(
  IconTerminal,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13634",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTerminal size={size} />,
  }
);
figma.connect(
  IconTrash,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13642",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTrash size={size} />,
  }
);
figma.connect(
  IconShuffle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13614",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconShuffle size={size} />,
  }
);
figma.connect(
  IconTriangle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13646",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTriangle size={size} />,
  }
);
figma.connect(
  IconVolume2,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13665",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVolume2 size={size} />,
  }
);
figma.connect(
  IconTrendingDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13644",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTrendingDown size={size} />,
  }
);
figma.connect(
  IconUserMinus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13658",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUserMinus size={size} />,
  }
);
figma.connect(
  IconMousePointer,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13565",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconMousePointer size={size} />,
  }
);
figma.connect(
  IconStopCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13625",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconStopCircle size={size} />,
  }
);
figma.connect(
  IconVideoOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13662",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVideoOff size={size} />,
  }
);
figma.connect(
  IconThumbsDown,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13636",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconThumbsDown size={size} />,
  }
);
figma.connect(
  IconSmile,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13622",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSmile size={size} />,
  }
);
figma.connect(
  IconPhoneMissed,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13579",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneMissed size={size} />,
  }
);
figma.connect(
  IconUserPlus,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13657",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUserPlus size={size} />,
  }
);
figma.connect(
  IconTwitch,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13647",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTwitch size={size} />,
  }
);
figma.connect(
  IconTv,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13648",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTv size={size} />,
  }
);
figma.connect(
  IconUnderline,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13651",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUnderline size={size} />,
  }
);
figma.connect(
  IconUser,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13659",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUser size={size} />,
  }
);
figma.connect(
  IconTwitter,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13650",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTwitter size={size} />,
  }
);
figma.connect(
  IconVolume1,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13666",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVolume1 size={size} />,
  }
);
figma.connect(
  IconWatch,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13670",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconWatch size={size} />,
  }
);
figma.connect(
  IconType,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13649",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconType size={size} />,
  }
);
figma.connect(
  IconZapOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13677",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconZapOff size={size} />,
  }
);
figma.connect(
  IconWifiOff,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13669",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconWifiOff size={size} />,
  }
);
figma.connect(
  IconXOctagon,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13673",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconXOctagon size={size} />,
  }
);
figma.connect(
  IconXCircle,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13674",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconXCircle size={size} />,
  }
);
figma.connect(
  IconZoomOut,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13681",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconZoomOut size={size} />,
  }
);
figma.connect(
  IconVolume,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13667",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVolume size={size} />,
  }
);
figma.connect(
  IconSearch,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13604",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSearch size={size} />,
  }
);
figma.connect(
  IconZap,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13680",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconZap size={size} />,
  }
);
figma.connect(
  IconUsers,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13661",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUsers size={size} />,
  }
);
figma.connect(
  IconTool,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13640",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTool size={size} />,
  }
);
figma.connect(
  IconVideo,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13664",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconVideo size={size} />,
  }
);
figma.connect(
  IconTrendingUp,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13643",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTrendingUp size={size} />,
  }
);
figma.connect(
  IconPhoneForwarded,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13578",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPhoneForwarded size={size} />,
  }
);
figma.connect(
  IconThermometer,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13633",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconThermometer size={size} />,
  }
);
figma.connect(
  IconToggleLeft,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13638",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconToggleLeft size={size} />,
  }
);
figma.connect(
  IconZoomIn,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13679",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconZoomIn size={size} />,
  }
);
figma.connect(
  IconUpload,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13656",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUpload size={size} />,
  }
);
figma.connect(
  IconUserX,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13660",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconUserX size={size} />,
  }
);
figma.connect(
  IconTarget,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13631",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTarget size={size} />,
  }
);
figma.connect(
  IconTag,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13632",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTag size={size} />,
  }
);
figma.connect(
  IconTablet,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13629",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTablet size={size} />,
  }
);
figma.connect(
  IconSkipBack,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13616",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSkipBack size={size} />,
  }
);
figma.connect(
  IconSmartphone,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13619",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSmartphone size={size} />,
  }
);
figma.connect(
  IconSlack,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13618",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSlack size={size} />,
  }
);
figma.connect(
  IconSunrise,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13628",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSunrise size={size} />,
  }
);
figma.connect(
  IconSunset,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13627",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSunset size={size} />,
  }
);
figma.connect(
  IconSettings,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13606",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSettings size={size} />,
  }
);
figma.connect(
  IconTrello,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13641",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconTrello size={size} />,
  }
);
figma.connect(
  IconRefreshCcw,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13593",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRefreshCcw size={size} />,
  }
);
figma.connect(
  IconRepeat,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13596",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRepeat size={size} />,
  }
);
figma.connect(
  IconRewind,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13598",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRewind size={size} />,
  }
);
figma.connect(
  IconRotateCw,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13600",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRotateCw size={size} />,
  }
);
figma.connect(
  IconSpeaker,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13621",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconSpeaker size={size} />,
  }
);
figma.connect(
  IconPackage,
  "https://www.figma.com/design/2FK25kD8bhdmjk3iTu97Vk/Simple-Design-System--Community-?node-id=4049:13571",
  {
    props: {
      size: figma.enum("Size", {
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconPackage size={size} />,
  }
);
