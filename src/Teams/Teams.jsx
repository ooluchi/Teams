/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
import React from 'react';
// import SideNav from '../../Component/LayoutComponent/SideNavSection/SideNav';
import SideNav from '../SideNav/SideNav'
import styles from '../Teams/Teams.module.scss';
// import TeamsTable from './TeamsTable/TeamsTable';
// import {MdArrowBackIosNew} from 'react-icons/md';
// import {MdOutlineArrowForwardIos} from 'react-icons/md';
// import Tabination from './Tabination/Tabination';
import Tab from './Tab/Tab';

// import AddTeamMembersModal from './AddTeamMembersModal';

const Teams = () => {
  

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // const generateItems = () => {
  //   const items = [];
  //   for (let i = 1; i <= totalPages * itemsPerPage; i++) {
  //     items.push(`Item ${i}`);
  //   }
  //   return items;
  // };

  // const allItems = generateItems();
  // const currentItems = allItems.slice(startIndex, endIndex);

  // const [toggleState, setToggleState] = useState(1);
  // const [filteredValue, setfilteredValue] = useState("");

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };

  // const [activeTab, setActiveTab] = useState(0);

  // const handleTabChange = (index) => {
  //   setActiveTab(index);
  // };

  // const filteredItems =
  //   activeTab === 0
  //     ? currentItems
  //     : currentItems.filter((item) => {
  //         if (activeTab === 1) {
  //           // Filter logic for 'Admin' tab
  //           // Assuming each item has a 'role' property
  //           return item.role === 'Admin';
  //         } else if (activeTab === 2) {
  //           // Filter logic for 'Analyst' tab
  //           return item.role === 'Analyst';
  //         }
  //         // Add more else if conditions for additional tabs if needed
  //       });

  //       const [isModalOpen, setModalOpen] = useState(false);

  //       const handleOpenModal = () => {
  //         setModalOpen(true);
  //       };

  //       const handleCloseModal = () => {
  //         setModalOpen(false);
  //       };

  return (
    <div className={styles.teamscontainer}>
      <SideNav/>
      <div className={styles.right}>
        <Tab />
      </div>
    </div>
  );
};

export default Teams;
