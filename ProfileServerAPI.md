Test <span class="T4">S</span>erver for <span class="T4">P</span>rofile <span class="T4">D</span>atabase

<span class="T4"><</span>URL<span class="T4">></span> to access site:

[https://profiles-7xngsv.turbo360-vertex.com/](https://profiles-7xngsv.turbo360-vertex.com/)

<span class="T1">Field names for data</span> <span class="T3"></span> (case matters!):

firstName

lastName

school

city

state

interests

<span class="T1">API for</span> <span class="T2">accessing data:</span>

Show all entries:

<URL>/api/profile

Show only entries that match <span class="T7">a</span> query <span class="T7">string</span>

<URL>/api/profile?<field name>=<string>

Example:

<URL>/api/profile?firstName=tom

Another way to show an entry based on id:

<URL>/api/profile/<span class="T7"><id_no></span>

Example:

<URL>/api/profile/5cb4d21b3df79b231c499615

Update an entry <span class="T7">based on id</span>:

<URL>/api/profile/<span class="T5">update</span>?<span class="T5">id=<id_no>&</span><<span class="T6">f</span>ield name>=<<span class="T5">value</span>>

Example:

<URL>/api/profile/<span class="T5">update</span>?<span class="T5">id=</span>5cb4d21b3df79b231c499615<span class="T5">&interests</span>=<span class="T5">eating</span>

It is possible to update more than one field at a time:

<URL>/api/profile/<span class="T5">update</span>?<span class="T5">id=</span>5cb4d21b3df79b231c499615<span class="T5">&interests</span>=<span class="T5">eating&school=K-State</span>

Remove an entry <span class="T7">based on id</span>:

<URL>/api/profile/<span class="T6">remove</span>?<span class="T5">id=<id_no></span>

Add a new entry:

Using POST or GET method using a form, the action should be set to:

<URL>/api/profile/<span class="T8">input</span>

The form’s field names should match the database field names listed above

Using GET method on the URL:

<URL>/api/profile/input?<fieldname1>=<value1>&<fieldname2>=<value2>…

Example

<URL>/api/profile/input?firstName=Tom&lastName=Mertz&school=SCHS&city=Salina&state=KS&interests=Web