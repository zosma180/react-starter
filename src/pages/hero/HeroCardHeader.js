import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroDeleteDialog from './HeroDeleteDialog';
import HeroEditDialog from './HeroEditDialog';

export default function HeroCardHeader(props) {
  const { t } = useTranslation();
  const { model, onReload } = props;
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // Handle the menu opening
  const handleMenuOpen = event => setMenuAnchor(event.currentTarget);

  // Handle the menu closing
  const handleMenuClose = () => setMenuAnchor(null);

  // Handle the delete operation
  const handleDeleteClick = () => {
    handleMenuClose();
    setDeleteConfirmOpen(true);
  };

  // Handle the delete confirm closing
  const handleDeleteConfirmClose = shouldReload => {
    setDeleteConfirmOpen(false);

    if (shouldReload) {
      onReload();
    }
  };

  // Handle the edit operation
  const handleEditClick = () => {
    handleMenuClose();
    setEditDialogOpen(true);
  };

  // Handle the model form closing
  const handleEditDialogClose = shouldReload => {
    setEditDialogOpen(false);

    if (shouldReload) {
      onReload();
    }
  };

  return (
    <>
      <CardHeader
        title={model.name}
        subheader={model.group}
        action={
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <Menu
        anchorEl={menuAnchor}
        open={menuAnchor !== null}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEditClick}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>

          {t('common.editButton')}
        </MenuItem>

        <MenuItem onClick={handleDeleteClick}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>

          {t('common.deleteButton')}
        </MenuItem>
      </Menu>

      <HeroEditDialog
        model={model}
        open={editDialogOpen}
        onClose={handleEditDialogClose}
      />

      <HeroDeleteDialog
        model={model}
        open={deleteConfirmOpen}
        onClose={handleDeleteConfirmClose}
      />
    </>
  );
}
