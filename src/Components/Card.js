import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Field({label, value}) {
  return (
    <Typography variant="body2" color="text.secondary" className='flex'>
      <p className='font-bold'>{label}</p>
      {value}
    </Typography>
  )
}

export default function CardComponent({users}) {
    
    return (
        <div className='grid grid-cols-3 gap-5'>
            {users && users.map((user) => (
                <Card key={user.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Field label='Username: ' value={user.username}/>
                      <Field label='Name: ' value={user.name}/>
                      <Field label='Email: ' value={user.email}/>
                      <Field label='Phone: ' value={user.phone}/>
                      <Field label='Website: ' value={user.website}/>
                      <Field label="City: " value={user.address.city}/>
                      <Field label="Street: " value={user.address.street}/>
                      <Field Label="Suite: " value={user.address.suite}/>
                      <Field label="Zipcode: " value={user.address.zipcode}/>
                    </CardContent>
                  </CardActionArea>
              </Card>
            ))}
        </div>
        
    )
}