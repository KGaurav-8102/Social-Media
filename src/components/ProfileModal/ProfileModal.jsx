import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modelOpened, setModelOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modelOpened}
      onClose={() => setModelOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>
        <div>
            <input type="text" name='firstname' placeholder='Firstname' className="infoInput" />
            <input type="text" name='lastname' placeholder='Lastname' className="infoInput" />
        </div>
        <div>
            <input type="text" name='worksAt' placeholder='Works At' className="infoInput" />
        </div>
        <div>
        <input type="text" name='livesin' placeholder='LivesIn' className="infoInput" />
        <input type="text" name='country' placeholder='Country' className="infoInput" />
        </div>
        <div>
        <input type="text" placeholder='Relationship Status' className="infoInput" />
        </div>
        <div>
            Profile Image
            <input type="file" name='ProfileImg' />
            Cover Image
            <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">
            Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;