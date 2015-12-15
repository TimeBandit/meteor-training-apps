Template.add_project.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.edit_project.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});

Template.add_project.events({
    'submit .add_project': function(event) {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var project_date = event.target.project_date.value;
        // console.log(name, type, client, description, project_date);

        // use jQuery to grab the image
        var file = $('#projectImage').get(0).files[0];
        console.log(file);
        if (file) {

            fsFile = new FS.File(file);
            // insert the FS file into the FS collection
            ProjectImages.insert(fsFile, function(err, result) {
                if (!err) {
                	// build the path top the file
                    var projectImage = '/cfs/files/ProjectImages/' + result._id;

                    // Insert Project
                    Projects.insert({
                        name: name,
                        description: description,
                        type: type,
                        client: client,
                        project_date: project_date,
                        projectImage: projectImage
                    });
                } else{
                    FlashMessages.sendSuccess(err.reason);
                }
            });
        } else {
            // Insert Project
            Projects.insert({
                name: name,
                description: description,
                type: type,
                client: client,
                project_date: project_date
            });
        };

        FlashMessages.sendSuccess('Project Added');
        Router.go('/admin/projects');        
        return false;        
    }
});

Template.edit_project.events({
    'submit .edit_project': function(event) {
        var name = event.target.name.value;
        var type = event.target.type.value;
        var client = event.target.client.value;
        var description = event.target.description.value;
        var project_date = event.target.project_date.value;
        // console.log(name, type, client, description, project_date);

        // use jQuery to grab the image
        var file = $('#projectImage').get(0).files[0];
        if (file) {

            fsFile = new FS.File(file);
            // insert the FS file into the FS collection
            ProjectImages.insert(fsFile, function(err, result) {
                if (!err) {
                	// build the path top the file
                    var projectImage = '/cfs/files/ProjectImages/' + result._id;

                    // Update Project
                    Projects.update({
                    	_id: this._id
                    }, {
                    	$set: {
                    		name: name,
                    		description: description,
                    		type: type,
                    		client: client,
                    		project_date: project_date,
                    		projectImage: projectImage
                    	}
                    });
                    
                }
            });
        } else {
            // Update Project
                    Projects.update({
                    	_id: this._id
                    }, {
                    	$set: {
                    		name: name,
                    		description: description,
                    		type: type,
                    		client: client,
                    		project_date: project_date                                                                                                                                                                                                                    
                    	}
                    });
        };

        FlashMessages.sendSuccess('Project Updated');
        Router.go('/admin/projects');
        return false;
    }
});

Template.list_projects.events({
	'click .delete_project': function (event) {
		Projects.remove(this._id);
		FlashMessages.sendSuccess("Project Deleted");
		// prevent submit
		return false
	}
});