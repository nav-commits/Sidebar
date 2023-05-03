import CodeIcon from '@mui/icons-material/Code';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArticleIcon from '@mui/icons-material/Article';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const sideBarData = [
    {
        id: 1,
        mainLabel: {
            mainLabelName: 'Getting Started',
            icon: <ArticleIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['API design', 'Routing', 'Testing'],
                },
            ],
        },
    },
    {
        id: 2,
        mainLabel: {
            mainLabelName: 'Components',
            icon: <ToggleOffIcon fontSize='small' />,
            subTitle: [
                {
                    name: 'Inputs',
                    links: ['Autocomplete', 'Button', 'CheckBox', 'Text Field'],
                },
                {
                    name: 'Data Display',
                    links: ['Chip', 'List', 'Table'],
                },
                {
                    name: 'Feedback',
                    links: ['Backdrop'],
                },
                {
                    name: 'Navigation',
                    links: ['Menu'],
                },
            ],
        },
    },
    {
        id: 3,
        mainLabel: {
            mainLabelName: 'Component API',
            icon: <CodeIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['Accordion', 'Alert', 'Button', 'Card'],
                },
            ],
        },
    },

    {
        id: 4,
        mainLabel: {
            mainLabelName: 'Customization',
            icon: <ModeEditIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['API design', 'Routing', 'Testing'],
                },
            ],
        },
    },

    {
        id: 5,
        mainLabel: {
            mainLabelName: 'How-to-guides',
            icon: <VisibilityIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['API design', 'Routing', 'Testing'],
                },
            ],
        },
    },

    {
        id: 6,
        mainLabel: {
            mainLabelName: 'Experimental APIs',
            icon: <CodeIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['API design', 'Routing', 'Testing'],
                },
            ],
        },
    },

    {
        id: 7,
        mainLabel: {
            mainLabelName: 'Discover more',
            icon: <AddCircleIcon fontSize='small' />,
            subTitle: [
                {
                    links: ['API design', 'Routing', 'Testing'],
                },
            ],
        },
    },
];
