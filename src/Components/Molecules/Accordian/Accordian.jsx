import { Link } from 'react-router-dom';
import '../Accordian/Accordian.css';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Accordion({ data, handleToggle, clicked }) {
    return (
        <nav>
            <ul style={{ listStyle: 'none', paddingTop: 20, marginTop: 0 }}>
                {data.map((navItem, idx) => (
                    <React.Fragment key={idx}>
                        <li
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 10,
                                cursor: 'pointer',
                            }}
                            onClick={() => handleToggle(idx)}
                        >
                            <span style={{ color: 'black' }}>
                                {navItem.mainLabel.icon}
                            </span>
                            <p className='list-item' style={{ color: 'black', gap: 10 }}>
                                {navItem.mainLabel.mainLabelName}
                            </p>

                            {clicked === idx ? (
                                <span
                                    style={{
                                        color: 'rgb(216, 225, 142)',
                                        marginLeft: 'auto',
                                        marginRight: '5px',
                                    }}
                                >
                                    <KeyboardArrowDownIcon fontSize='small' />
                                </span>
                            ) : (
                                <span
                                    style={{
                                        color: 'rgb(216, 225, 142)',
                                        marginLeft: ' auto ',
                                        marginRight: '5px',
                                    }}
                                >
                                    <KeyboardArrowRightIcon fontSize='small' />
                                </span>
                            )}
                        </li>
                        {/* inner list */}
                        <ul
                            className={clicked === idx ? 'content show' : 'content'}
                            style={{ listStyle: 'none', color: 'black' }}
                        >
                            {navItem.mainLabel.subTitle?.map((name, id) => (
                                <React.Fragment key={id}>
                                    <li className='sub-list-main-title' key={id}>
                                        {name.name}
                                    </li>

                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            marginLeft: -40,
                                            color: 'black',
                                        }}
                                    >
                                        {name.links.map((link, id) => (
                                            <div
                                                key={id}
                                                style={{
                                                    listStyle: 'none',
                                                    paddingTop: 10,
                                                }}
                                            >
                                                <li className='link-item'>
                                                    <Link
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'black',
                                                        }}
                                                        to={link}
                                                    >
                                                        {link}
                                                    </Link>
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    );
}

export default Accordion;
