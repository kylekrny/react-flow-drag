const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('nodeType', nodeType); // Store the node type in a custom data attribute
  };
  return (
    <div className='sidebar'>
      <h5>Drag elements from here!</h5>
      <div
        className='SidebarItem'
        draggable
        onDragStart={(event) => onDragStart(event, 'email')}
        key='email'
      >
        Email
      </div>
      <div
        className='SidebarItem'
        draggable
        onDragStart={(event) => onDragStart(event, 'sms')}
        key='sms'
      >
        SMS
      </div>
      <div
        className='SidebarItem'
        draggable
        onDragStart={(event) => onDragStart(event, 'waitThenCheck')}
        key='waitThenCheck'
      >
        Wait and Check
      </div>
      <div
        className='SidebarItem'
        draggable
        onDragStart={(event) => onDragStart(event, 'end')}
        key='end'
      >
        End
      </div>
    </div>
  );
};

export default Sidebar;
