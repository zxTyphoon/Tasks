using EmployeeService as service from '../../srv/service';

annotate service.Employees with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'firstName',
            Value : firstName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'lastName',
            Value : lastName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'dateOfJoining',
            Value : dateOfJoining,
        },
        {
            $Type : 'UI.DataField',
            Label : 'address',
            Value : address,
        },
        {
            $Type : 'UI.DataField',
            Label : 'phoneNumber',
            Value : phoneNumber,
        },
    ]
);
annotate service.Employees with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'firstName',
                Value : firstName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lastName',
                Value : lastName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'dateOfJoining',
                Value : dateOfJoining,
            },
            {
                $Type : 'UI.DataField',
                Label : 'address',
                Value : address,
            },
            {
                $Type : 'UI.DataField',
                Label : 'phoneNumber',
                Value : phoneNumber,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
