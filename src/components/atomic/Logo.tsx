import React from "react";

const Logo = () => {
	return (
		<div className="flex items-center gap-2">
			<img src="./logo_coding_conf.svg" alt="" />
			{/* use fira code fontface */}
			<p className="ml-2 font-firacode text-2xl font-bold text-white">
				Coding Conf
			</p>
		</div>
	);
};

export default Logo;
