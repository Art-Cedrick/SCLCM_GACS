import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  AttachFile as AttachFileIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import AxiosInstance from "./AllForms/Axios";

const ResourceSharing = () => {
  const defaultValues = {
    title: '',
    content: '',
  };

  const { control, handleSubmit, reset, setValue } = useForm({ defaultValues });
  const [resources, setResources] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingResource, setEditingResource] = useState(null);
  const [notification, setNotification] = useState("");
  const [expandedResourceId, setExpandedResourceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // New state for storing user information

  useEffect(() => {
    const fetchUserAndResources = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setNotification("You must be logged in to perform this action.");
        setLoading(false);
        return;
      }

      try {
        // Fetch the logged-in user's info
        const userResponse = await AxiosInstance.get("/auth/user/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setUser(userResponse.data);

        // Fetch resources
        const resourcesResponse = await AxiosInstance.get("/resource/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResources(resourcesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNotification("Failed to fetch data. Please log in.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndResources();
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    if (isVisible) {
      setEditingResource(null);
      reset();
    }
  };

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification("You must be logged in to perform this action.");
      return;
    }

    try {
      const headers = {
        Authorization: `Token ${token}`,
      };

      const requestData = {
        title: data.title,
        content: data.content,
        author: user.username, // Set the current user as the author
      };

      if (editingResource) {
        await AxiosInstance.put(`/resource/${editingResource.id}/`, requestData, { headers });
        setNotification("Resource updated successfully");
      } else {
        await AxiosInstance.post(`/resource/`, requestData, { headers });
        setNotification("Resource added successfully");
      }

      // Refresh resources
      const resourcesResponse = await AxiosInstance.get("/resource/", { headers });
      setResources(resourcesResponse.data);

      reset();
      setEditingResource(null);
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("Error saving resource:", error);
      setNotification("Error saving resource");
    }
  };

  const handleEdit = (resource) => {
    setEditingResource(resource);
    setValue("title", resource.title);
    setValue("content", resource.content);
    setIsVisible(true);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setNotification("You must be logged in to perform this action.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this resource?")) {
      try {
        await AxiosInstance.delete(`/resource/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResources((prev) => prev.filter((resource) => resource.id !== id));
        setNotification("Resource deleted successfully");
      } catch (error) {
        console.error("Error deleting resource:", error);
        setNotification("Error deleting resource");
      }
    }
  };

  const filteredResources = resources.filter((resource) =>
    resource.title && typeof resource.title === 'string' &&
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleContentVisibility = (id) => {
    setExpandedResourceId((prev) => (prev === id ? null : id));
  };

  const tableStyles = `
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      background-color: #f2f2f2;
      font-weight: bold;
    }
  `;

  if (loading) {
    return <Typography variant="body2">Loading resources...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <style>{tableStyles}</style>
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            RESOURCE SHARING
          </Typography>
          <Box display="flex" alignItems="center">
            <IconButton onClick={toggleVisibility}>
              <AddIcon />
            </IconButton>
            <TextField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              sx={{
                marginRight: 1,
                height: "30px",
                "& input": { padding: "5px", lineHeight: "1.2" },
              }}
            />
            <IconButton size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => {
                setSearchQuery("");
                reset();
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>

        {notification && (
          <Typography variant="body2" sx={{ color: "green", textAlign: "center" }}>
            {notification}
          </Typography>
        )}

        {isVisible && (
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              p: 2,
              backgroundColor: "#f7f9fc",
              mb: 2,
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Title"
                    fullWidth
                    margin="normal"
                    sx={{ mb: 1 }}
                  />
                )}
              />
              <Controller
                name="content"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <CKEditor
                    {...field}
                    editor={ClassicEditor}
                    data={field.value}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      field.onChange(data);
                    }}
                  />
                )}
              />
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <IconButton size="small">
                  <AttachFileIcon fontSize="small" />
                </IconButton>
                <Button type="submit" variant="contained" color="primary" size="small">
                  {editingResource ? "Update" : "Post"}
                </Button>
              </Stack>
            </form>
          </Box>
        )}

        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Box
              key={resource.id}
              sx={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                p: 2,
                backgroundColor: "#fff",
                mb: 2,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", cursor: 'pointer' }}
                  onClick={() => toggleContentVisibility(resource.id)}
                >
                  {resource.title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    onClick={() => handleEdit(resource)}
                    sx={{ marginRight: "8px" }}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDelete(resource.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Stack>
              <Typography variant="caption" color="textSecondary">
                Author: {resource.author}
              </Typography>
              {expandedResourceId === resource.id && (
                <div dangerouslySetInnerHTML={{ __html: resource.content }} />
              )}
            </Box>
          ))
        ) : (
          <Typography variant="body2">No resources found.</Typography>
        )}
      </Stack>
    </Container>
  );
};

export default ResourceSharing;
