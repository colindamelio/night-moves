function Letter({word, num}) {
	return (
		<span>
			{
				word?.value ? word.value[num] : null
			}
		</span>
	)
}

export default Letter;